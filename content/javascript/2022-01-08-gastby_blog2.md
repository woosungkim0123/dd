---
layout: post
current: post
cover: assets/built/images/js.jpg
navigation: True
title: gatsby로 블로그 만들기2
date: 2022-01-07 22:57
tags: [javascript]
class: post-template
subclass: "post tag-python"
author: Lome
---

<span></span>

<br>

<strong class="subtitle_fontAwesome">Gatsby</strong>

<strong class="subtitle2_fontAwesome">GraphQL</strong>

GraphQL은 REST API에서는 찾을 수 없는 매력적인 특징을 가지고 있습니다.

바로 필요한 데이터만 받아올 수 있다는 것인데요, 다음과 같이 사용할 수 있습니다.

```javascript
query getPeopleList {
  allPeople {
    edges {
      node {
        id
        name
      }
    }
  }
}
```

```javascript
// Query 결과 반환 값
// 모든 유저들의 id값과 이름만 가져오도록 정의한 getPeopleList Query의 사용 예시
{
  "data": {
    "allPeople": {
      "edges": [
        {
          "node": {
            "id": "cGVvcGxlOjE=",
            "name": "Luke Skywalker"
          }
        },
        {
          "node": {
            "id": "cGVvcGxlOjQ=",
            "name": "Darth Vader"
          }
        },
        {
          "node": {
            "id": "cGVvcGxlOjU=",
            "name": "Leia Organa"
          }
        }
      ]
    }
  }
}
```

GraphQL은 기본적으로 GraphiQL이라는 IDE를 제공하는데, 이를 통해 어떤 데이터를 요청할 수 있는지 알 수 있을 뿐더러 쿼리 요청 전에 잠재적인 에러를 알려줄 수 있는 강력한 기능을 제공합니다.

일반적으로 Gatsby에서 메타데이터는 gatsby-config.js 파일에서 확인

메타데이터를 요청하는 Query를 작성해보았으니 이제 컴포넌트에서 Query를 요청하는 방법

가장 먼저 해줄 것은 Query를 정의하는 것입니다.

Gatsby에서는 기본적으로 pages 폴더 내부의 파일과 Gatsby API를 통해 생성해주는 페이지의 템플릿 파일에서만 Query 정의가 가능

일반적인 컴포넌트에서는 변수로서 정의가 불가능하고, StaticQuery라는 기능을 통해 정의가 가능

```javascript
// src/pages/info.tsx
import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Text from 'components/Text'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
```

변수에 Query를 담아주고, 이를 Export 해주면 Gatsby 내부적으로 요청

Gatsby 내부적으로 요청을 보내고 응답으로 데이터를 Props로 전달

<br>

<strong class="subtitle2_fontAwesome">페이지 이동</strong>

Gatsby 프로젝트에서는 src/pages 내의 모든 파일의 이름을 통해 페이지에 접근할 수 있다고 했었습니다.

따라서 만약 해당 디렉토리에 about.tsx 파일이 존재한다면 Gatsby 내부적으로 your-web-site.com/about 과 같은 페이지 링크를 생성합니다.

여기서 about.tsx 파일을 src/pages/info 디렉토리로 이동한다면 페이지 링크는 어떻게 변할까요?

Gatsby는 이에 맞게 디렉토리명도 반영하므로 your-web-site.com/info/about과 같은 페이지 링크를 생성할 것입니다.

그러기 때문에 우리는 어떤 페이지가 생성될 지 충분히 알 수 있어 단순 Anchor 태그(a태그)를 통해 페이지를 이동할 수 있도록 개발해도 상관없습니다.

이동하는 과정에서 새로고침 현상이 발생하게 됩니다.

일반적인 웹 사이트에서도 볼 수 있는 현상이지만, Gatsby에서는 보다 더 나은 사용자 경험을 위해 자체적으로 API를 제공

Gatsby에서는 기본적으로 페이지 이동을 위한 API를 제공하고 있습니다.

해당 API가 바로 Gatsby Link API인데요, 이 API를 통해 페이지 이동을 구현하면 보다 더 높은 성능의 정적 사이트를 구현

```javascript
import React, { FunctionComponent } from "react";
import Text from "components/Text";
import { Link } from "gatsby";

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Hello, World!" />
      <Link to="/info/">To Info</Link>
    </div>
  );
};

export default IndexPage;
```

Gatsby Link API의 성능상 이점

Gatsby는 Prefetch를 통해 페이지에서 사용할 리소스의 로딩 속도를 높인다고 합니다.

그럼 어떻게 페이지를 찾고 Prefetch를 진행할까요?

이를 위한 것이 바로 Gatsby Link API에서 제공하는 Link 컴포넌트입니다.

페이지가 로드되면 Gatsby는 리소스 로드 속도를 높이기 위해 현재 페이지에서 사용되는 모든 링크를 찾은 후, 각 링크의 페이지를 미리 로드하기 시작합니다.

우리가 생성한 프로젝트에서 확인해보면 메인 페이지의 로딩이 완료되면, Gatsby는 /info 링크를 찾고, 이 페이지를 미리 로드하는 것이죠.

이를 통해 Gatsby는 더 높은 사용자 경험을 제공할 수 있는 것입니다.

React에서는 Sass, CSS 등과 같은 여러 스타일링 기법들이 존재합니다.

위의 두 가지 방법은 스타일 파일을 따로 만들고, 이를 컴포넌트 파일에서 불러와 적용하는 방식입니다.

하지만 여기서 사용할 EmotionJS 라이브러리는 CSS-in-JS 라이브러리로, 자바스크립트 파일 내에서 스타일을 지정할 수 있는 라이브러리입니다.

CSS-in-JS 라이브러리 정말 다양한데 왜 하필 EmotionJS를 사용할까요?

기존에 많이 사용하던 라이브러리는 styled-components 라이브러리였습니다.

템플릿 리터럴 또는 객체를 통해 손쉽게 스타일을 적용한 컴포넌트를 만들 수 있었고, 손쉽게 적용할 수 있었기 때문입니다.

게다가 Sass 문법을 지원했기 때문에 더 간결한 코드 작성이 가능하고, 서버사이드렌더링을 지원해주기 때문에 이를 위해 추가적인 조치를 취할 필요가 없었습니다.

하지만 번들 용량이 위의 사진과 같이 4개의 라이브러리 중 제일 컸는데, 이는 콘텐츠 제공에 큰 영향을 끼치기 때문에 아주 중요한 문제였습니다.

그러다 EmotionJS 라이브러리가 등장했는데 해당 라이브러리는 styled-components의 기능을 거의 동일하게 사용할 수 있었을 뿐더러, 추가적으로 라이브러리를 설치해 손쉽게 기능 확장이 가능합니다.

하지만 제일 중요한 점은 이런 기능을 그대로 구현한 라이브러리의 번들 용량이 다른 라이브러리에 비해 압도적으로 작다
