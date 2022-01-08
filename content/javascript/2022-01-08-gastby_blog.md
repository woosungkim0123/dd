---
layout: post
current: post
cover: assets/built/images/js.jpg
navigation: True
title: gatsby로 블로그 만들기
date: 2022-01-07 22:57
tags: [javascript]
class: post-template
subclass: "post tag-python"
author: Lome
---

<span></span>

<br>

<strong class="subtitle_fontAwesome">Gatsby</strong>

<strong class="subtitle2_fontAwesome">JAM Stack</strong>

Jamstack is an architecture designed to make the web faster, more secure, and easier to scale.

공식 설명: JAM Stack은 더 빠르고, 안전하며, 스케일링하기 쉬운 웹을 만들기 위해 디자인된 아키텍처

JAM Stack은 JavaScript, API, MarkUp(HTML, CSS 등)으로 이루어진 웹 구성 방법

![gatsby](assets/built/images/react/gatsby1.png)

기존 웹 사이트의 방식은 대부분 서버에서 데이터베이스 또는 CMS(Content Management System)로부터 추출한 데이터를 프론트엔드에 뿌려주는 방식

클라이언트에 데이터를 보여주기 위해서 많은 절차를 거쳐야만 하기 때문에 구조가 복잡

JAM Stack을 사용한 방식은 절차가 매우 간단

각종 마크업 요소와 다양한 API를 통해 만든 정적 웹 사이트를 Pre-Render한 것을 CDN(Content Delivery Network)을 통해 웹 사이트를 열람할 수 있다.

대부분의 웹 사이트는 처음 접속 시, 서버를 통해 데이터를 받아와 이를 렌더링하는 과정이 필요합니다. 하지만, JAM Stack은 렌더링할 화면들을 모두 Pre-Render하여 제공되어 그만큼 사용자에게 화면을 보여주기 위해 준비하는 시간을 단축할 수 있다.

이에 더불어서 브라우저에서 첫 응답을 받기까지 걸리는 시간인 TTFB(Time to First Byte)를 최소화하는 데에는 미리 빌드 된 파일을 CDN을 통해 제공하는 것보다 나은 방법이 없다고 합니다.

JAM Stack은 API를 통해 정적 사이트를 생성합니다. 여기서 사용되는 API는 JAM Stack을 활용한 각 프레임워크에서의 마이크로 서비스로서, 사이트 생성을 위한 프로세스가 추상화되어 있기 때문에 그만큼 공격 노출 범위가 감소하게 됩니다.

스케일링하기 쉬운 웹 사이트를 제공할 수 있다. 정적 웹 사이트에서의 스케일링은 더 많은 지역에서 홈페이지를 제공할 수 있게 하는 의미인데, 미리 빌드 된 파일 제공을 담당하는 CDN이 그 역할을 충분히 수행해낼 수 있습니다.

<br>

<strong class="subtitle2_fontAwesome">왜 Gatsby?</strong>

대표적인 JAM Stack 기반 프레임워크 4가지 - next, gatsby, nuxt, jekyll

Next.js는 정적 사이트 생성의 기능도 있지만 주로 서버 사이드 렌더링을 위해 사용하는 프레임워크입니다.

즉, 서버와 통신을 하며 요청을 받을 때마다 동적으로 웹 사이트를 생성합니다.

하지만 Gatsby는 서버 없이, 오로지 정적 사이트 생성를 위해 사용하는 프레임워크입니다.

그래서 서비스 및 기업 소개 페이지, 블로그, 포트폴리오 등에 많이 사용됩니다.

<br>

<strong class="subtitle2_fontAwesome">기본 지식</strong>

react

GraphQL

GraphQL은 페이스북에서 개발한 쿼리 언어

각각의 엔드포인트에서 고정된 데이터를 받을 수 있는 Rest API와는 다르게 GraphQL은 단일 엔드포인트에서 원하는 데이터만을 받을 수 있다는 장점을 가지고 있습니다.위와 같이 Query를 통해 데이터를 받아올 수 있으며, 이 외에도 데이터 변경을 위한 Mutation, 실시간 기능을 위한 Subscription이 있습니다

<br>

<strong class="subtitle2_fontAwesome">프로젝트 환경</strong>

```
npx gatsby-cli new "[프로젝트 명]" // 프로젝트 만들기

gatsby develop // 서버 실행
```

디렉토리 설명

- contents : 블로그 포스트 관련 파일들을 저장하기 위한 디렉토리입니다.

- src

  - components : React Component를 저장하기 위한 디렉토리입니다.

  - hooks : Custom Hooks을 저장하기 위한 디렉토리입니다.

  - pages : 페이지의 역할을 하는 컴포넌트를 저장하기 위한 디렉토리입니다. 기본적으로 브라우저에서 pages 디렉토리에 있는 파일의 이름을 통해 페이지에 접근할 수 있기 때문에 페이지의 역할이 아닌 컴포넌트들은 해당 디렉토리에 절대 저장하면 안 됩니다.

  - templates : 게시글 페이지와 같이 페이지의 역할을 하면서 같은 형식의 여러 콘텐츠를 보여주는 컴포넌트를 저장하기 위한 디렉토리입니다. pages 디렉토리와는 다르게 파일명으로 페이지에 접근이 불가능합니다. Gatsby에서 제공하는 API를 통해 이 디렉토리에 저장된 템플릿 컴포넌트로 여러 페이지를 만들 수 있습니다.

사용하지 않는 라이브러리를 삭제

PWA(Progressive Web Application)을 위한 라이브러리인 gatsby-plugin-manifest와 Gatsby Cloud를 위한 라이브러리인 gatsby-plugin-gatsby-cloud를 삭제해주세요.

```
yarn remove gatsby-plugin-manifest gatsby-plugin-gatsby-cloud
```

타입스크립트 설치후 Gatsby에서 타입스크립트를 사용하기 위한 플러그인 설치

```
yarn add gatsby-plugin-typescript
```

```javascript
// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
```

```javascript
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "allowJs": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "baseUrl": "./src",
    "paths": {
      "components/*": ["./components/*"],
      "utils/*": ["./utils/*"],
      "hooks/*": ["./hooks/*"]
    },
    // paths 옵션은 상대경로가 아닌 절대경로를 사용하기 위해 경로를 매핑해주는 옵션인데, 이를 사용하면 상대적으로 깔끔한 코드를 작성
    // 이를 사용하기 위해서 baseUrl을 작성
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*.tsx"],
  "exclude": ["node_modules"]
}
```

```javascript
// gatsby-node.js
// Webpack Config를 추가
const path = require("path");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
        hooks: path.resolve(__dirname, "src/hooks"),
      },
      // components로 시작하는 경로는 모두 src 폴더 내의 components 폴더로 매핑해주어 절대 경로를 사용할 수 있도록 해주는 부분입니다.
    },
  });
};
```

ESLint는 코드 분석을 통해 문법 오류 또는 코드 규칙에 어긋나는 부분을 찾아주는 정적 코드 분석 도구이고, Prettier는 개발자가 작성한 코드를 정해진 규칙에 따르도록 변환해주는 Code Formatter

VSCode의 확장 프로그램을 설치후

```
yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest --dev
```

```javascript
// 루트 디렉토리에 .eslintrc.json 파일을 생성후 작성
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint"],
  "ignorePatterns": ["dist/", "node_modules/"],
  "rules": {}
}
```

```javascript
// .eslintignore 파일을 생성후 작성
gatsby - browser.js;
gatsby - config.js;
gatsby - node.js;
gatsby - ssr.js;
```

```javascript
// .prettierrc
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

VSCode 설정에서 진행해야하니 상단 File 탭의 Preferences > Settings 메뉴

Format On Save 체크

Prettier 옵션에 맞게 Formatting을 해주기 위해 우측 상단의 JSON 형태의 Setting 화면을 여는 버튼을 클릭후 밑에 코드 작성

```javascript
{
  ...,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  ...
}
```
