---
layout: post
current: post
cover:  assets/built/images/c/c-main.png
navigation: True
title: 체육복
date: 2021-09-26 19:30
tags: [coading]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

<br>

<strong class="subtitle_fontAwesome">체육복</strong>

<strong class="subtitle2_fontAwesome">내가 푼 방식</strong>

일단 각각의 차집합을 구해서 변수에 담아주었다

![cloth](assets/built/images/coading/cloth1.JPG)

~~~javascript
function solution(n, lost, reserve) {
  const realLost = lost.filter((a)=>(reserve.indexOf(a) === -1)).sort((a,b) => a-b)  
  const realReserve = reserve.filter((a)=>(lost.indexOf(a) === -1)).sort((a,b) => a-b)  

  return answer;
}
~~~

잃어버린사람들(lost) 기준에서 filter을 사용해 체육복 여분을 가진사람을 걸러냄. 

조건으로 lost와 reserve를 indexOf로 비교해서 없으면 -1이 나오니 -1의 결과가 나오는것만 realLost에 담음. reserve도 마찬가지

그리고 sort를 이용해 오름차순을 해주었다

여기까지는 혼자 힘으로 했으나.. 아무리 생각해봐도 떠오르지않아서 여러개의 답안을 봤는데 사실 이해가 잘 되지않았으나 그 중에 이해가 된 것을 사용해보았다

~~~javascript
let answer = n - lost_filter.length;
~~~

답안을 전체에서 여벌옷이 없는 상태에서 잃어버린 사람을 빼주었다

여기에서 이제 여벌있는 사람이 빌려줄수있는 사람만 더해주면 된다

~~~javascript
let i = 0;

while(i < reserve_filter.length){
  if(lost_filter.indexOf(reserve_filter[i] - 1) !== -1){
    lost_filter.splice(lost_filter.indexOf(reserve_filter[i]- 1),1)
    answer+=1;
    i++;
  } else if (lost_filter.indexOf(reserve_filter[i] + 1) !== -1){
    lost_filter.splice(lost_filter.indexOf(reserve_filter[i]+1),1)
    answer += 1;
    i++;
  } else {
    i++;
}  
~~~

while을 통해 반복문을 돌리고 반복문의 갯수를 여벌의 옷이 있는 사람중에 잃어버리지 않은 사람들 숫자만큼 돌렸다

그리고 안에 if문을 써서 이번에는 여벌옷이 없는데 잃어버린 사람들의 번호와 여분의 사람들 번호 -1이 일치하는 사람들을 찾아서 있으면 answer에 +1을 해주었다

번호 +1이 일치하는 사람도 마찬가지로 하고 만약 없다면 그냥 다음으로 넘어가게 코드를 짯다

그리고 마지막으로 return answer을 해주면 끝

다른 사람들은 쉽다고 하지만 첫문제라 어려웠고 해답조차도 이해가 안가는 부분이 많았다

다른 문제들을 풀면서 이 문제에 대한 다른 답안들도 참고해서 추가할 예정

