---
title: 성능 테스트 - nGrinder
author: woosungKim
date: 2023-6-10 20:00:00 +0800
categories: [성능, 테스트]
tags: [성능 테스트, nGrinder]
---

[1. 성능 테스트 개념](/posts/performance_test)  
**2. 성능 테스트 - nGrinder**  

<br>
<br>

네이버에서 제공하는 서버 부하 테스트 오픈 소스 프로젝트이며 사용하기가 쉽다는 매우 큰 장점이 있습니다.

<br>

### nGrinder 구성

nGrinder는 Controller와 Agent 구조를 사용하여 타겟 서버에 대한 성능 테스트를 수행합니다.  

각 구성 요소의 기능은 다음과 같습니다.

<br>

**nGrinder Controller**

- 가상 사용자 설정, 테스트 스크립트와 같은 성능 테스트 관련 설정을 관리합니다.
- 테스트 스크립트를 바탕으로 nGrinder Agent들에게 명령을 내리는 역할을 합니다.
- 타겟 서버에 API 호출을 한 후, Agent들로부터 결과를 수집하고 리포팅 기능을 제공합니다.

<br>

**nGrinder Agent**

- Controller로부터 받은 명령에 따라 타겟 서버에 대한 API 호출을 수행합니다.
- 테스트 실행 중 생성된 데이터와 결과를 Controller로 전송합니다.
- 여러 Agent가 동시에 작동함으로써 대규모의 부하 테스트를 가능하게 합니다.

nGrinder 시스템에서 Controller는 테스트의 중심점으로서 모든 테스트를 조정하며, Agent는 실제 부하를 생성하여 성능 테스트를 실행하는 역할을 합니다.

![ngrinder 구성](/posts/ngrinder/ngrinder_1.png)

<br>

nGrinder의 가장 허들인 테스트 스크립트에서 의존성 라이브러리를 호출해야하는 경우 업로드해서 import로 사용할 수 있고 대량의 데이터를 csv파일로 export해서 사용할 수 있다.

부하를 발생시킬 Agent를 몇대를 사용할 것인지, 서버당 가상 유저를 몇명 둘 것인지에 대한 설정을 할 수 있다.

<br>

### nGrinder AWS 환경 설정

총 3개의 AWS EC2와 Docker Compose를 사용하여 구성하겠습니다. Agent서버를 한대만 두었지만 여러대가 필요한 경우 추가로 인스턴스를 늘려서 사용하시면 됩니다.

1번 백엔드 API 서버 - 111.111.111.111  
2번 nGrinder Controller - 222.222.222.222   
3번 nGrinder Agent - 333.333.333.333  

Agent에서 균등하게 부하를 만드려면 최적화가 잘되어야하고 리소스 환경이 좋아야 합니다. 즉, Controller와 Agent는 실제 물리적, 하드웨어적으로 분리시키는 게 좋습니다. 

또, Agent 서버는 우리가 개발한 API서버의 스펙 이상이여야 합니다. Agent 서버는 테스트를 위해 많은 요청을 API 서버에 보내는데 API 서버보다 성능이 떨어지면 Agent 서버가 먼저 멈추거나 느려질 수 있습니다. 이러면 API 서버가 얼마나 많은 요청을 처리할 수 있는지 제대로 테스트할 수 없게 됩니다.

<br>

**주의 사항1**

3개의 인스턴스를 모두 같은 가용 영역에 두어야 합니다. 

같은 가용영역의 경우 Private IP를 사용하여 통신할 수 있습니다. 네트워크 비용을 절약하고 보안을 강화하는데 도움이 됩니다.

[AWS에서 성능 테스트 시 발생하는 트래픽 비용 해결방법](/posts/aws_avaliability_zone)

<br>

### docker compose를 활용한 nGrinder 설정

```sh
docker compose up -d
```

**Controller**

```yml
# docker-compose.yml
version: '3.8'
services:
  controller:
    container_name: nGrinder-controller
    image: ngrinder/controller
    restart: always 
    ports:
      - "4040:80" # nGrinder 컨트롤러 페이지
      - "16001:16001" # Controller와 Agent 간의 통신을 위한 포트
      - "12000-12009:12000-12009" # nGrinder Agent가 부하 테스트의 결과를 컨트롤러로 전송하는 데 사용하는 포트
    volumes:
      - ./ngrinder-controller:/opt/ngrinder-controller
```

<br>

**Agent**

```yml
# docker-compose.yml
version: '3.8'
services:
  agent:
    container_name: nGrinder-agent
    image: ngrinder/agent
    restart: always
    command: 222.222.222.222:4040 # 알맞는 ip를 설정해주세요
    volumes:
      - ./agent:/opt/ngrinder-agent
```

<br>

**주의 사항2**

volume 설정을 꼭 해주셔야합니다. 만약 컨테이너가 삭제되었을 때 테스트 이력, 스크립트 파일들이 모두 삭제되게 됩니다.  
볼륨을 통해 컨테이너 외부에 데이터를 저장하게 되면, 컨테이너가 삭제되어도 해당 데이터는 유지됩니다.

혹시 연결 에러가 뜬다면 AWS의 경우 보안그룹을 확인해주세요.


<br>


### nGrinder 성능 테스트 방법

각각의 EC2에 Controller와 Agent가 켜져 있는 상태에서 Controller의 4040포트로 접속하면 nGrinder 메인 화면이 보인다.  
기본 아이디와 비밀번호는 admin으로 동일하다

![ngrinder 메인화면](/posts/ngrinder/ngrinder_2.png)

<br>

QuickStart에 url을 입력하여 간단한 테스트를 진행할 수도 있고 스크립트를 작성하여 자신의 원하는 테스트를 진행할 수 있다.

```groovy
@RunWith(GrinderRunner)
class TestRunner {

	public static GTest test
	public static HTTPRequest request
	public static Map<String, String> headers = [:]
	public static Map<String, Object> params = [:]
	public static List<Cookie> cookies = []

  // 프로세스 별로 1번만 실행
	@BeforeProcess
	public static void beforeProcess() {
		HTTPRequestControl.setConnectionTimeout(300000)
		test = new GTest(1, "111.111.111.111")
		request = new HTTPRequest()
		grinder.logger.info("before process.")
	}
  // 스레드 별로 한번만 실행
	@BeforeThread
	public void beforeThread() {
		test.record(this, "test")
		grinder.statistics.delayReports = true
		grinder.logger.info("before thread.")
	}

	@Before
	public void before() {
		request.setHeaders(headers)
		CookieManager.addCookies(cookies)
		grinder.logger.info("before. init headers and cookies")
	}

	@Test
	public void test() {
		HTTPResponse response = request.GET("http://111.111.111.111:8081/test", params)

		if (response.statusCode == 301 || response.statusCode == 302) {
			grinder.logger.warn("Warning. The response may not be correct. The response code was {}.", response.statusCode)
		} else {
			assertThat(response.statusCode, is(200))
		}
	}
}
```

<br>

성능 테스트 메뉴에서 테스트 생성을 누르면 밑에 페이지가 뜬다

![성능 테스트 페이지](/posts/ngrinder/ngrinder_3.png)

<br>

에이전트는 우리가 333.333.333.333에 연결된 Agent를 말하는 것이고 가상유저는 실제 사용자의 행동을 모방하여 서버에 시뮬레이션된 부하를 생성하는 클라이언트를 말합니다.

스크립트를 넣어주고 테스트 대상 서버를 선정후 저장 후 시작을 누르면 성능 테스트를 진행하게 되고 그 결과를 리포트 형태로 받아볼 수 있습니다.

TPS가 있고 당시 Agent의 로그도 볼 수 있습니다.

![성능 결과](/posts/ngrinder/ngrinder_4.png)

<br>

### 사용시 주의점 && 팁

- 성능 테스트의 에러율은 0이여야한다. 에러율이 나오면 빠르게 응답을 하게 되고 유의미한 데이터를 얻을 수 없습니다.

- 외부 api나 결제 모듈을 사용하는 경우 해당 endpoint를 포함해서 성능 테스트를 진행하게 되면 ip차단 등 다양한 문제가 발생할 수 있다. 이때는 외부연계의 평균 응답 시간을 측정하여 그만큼 호출하는 api에 의존 역전 원칙을 사용하여 쓰레드락을 걸면 됩니다. 

- 모든 것을 성능 테스트 하지 않습니다.

- 만약 문제가 생기면 해결을 위해 로그파일을 볼텐데 이것만 가지고는 문제의 원인을 다 찾을 수 없습니다. 그래서 성능 테스트를 진행할 때는 반드시 모니터링 환경이 있어야합니다.   

<br>

### 출처

<a href="https://www.slideshare.net/junhoyoon3994/ngrinder-30-load-test-even-kids-can-do?from_search=0" target="_blank"><strong>https://www.slideshare.net/junhoyoon3994/ngrinder-30-load-test-even-kids-can-do?from_search=0</strong></a>

