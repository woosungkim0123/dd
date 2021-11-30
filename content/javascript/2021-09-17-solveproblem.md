---
layout: post
current: post
cover:  assets/built/images/js.jpg
navigation: True
title: 문제해결
date: 2021-09-29 23:58
tags: [javascript]
class: post-template
subclass: 'post tag-python'
author: Lome
---

<span></span>

{% include table-of-contents-javascript.html %}

<br>

<strong class="subtitle_fontAwesome">문제해결</strong>

<strong class="subtitle2_fontAwesome">Vue CLI</strong>

~~~terminal
npm run serve

> todo@0.1.0 serve /home/riyad/Desktop/todo_wedevs/todo
> vue-cli-service serve

 INFO  Starting development server...
 ERROR  Error: Cannot find module 'vue-loader-v16/package.json'
Error: Cannot find module 'vue-loader-v16/package.json'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:613:15)
    at Function.Module._load (internal/modules/cjs/loader.js:539:25)
    at Module.require (internal/modules/cjs/loader.js:667:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at api.chainWebpack.webpackConfig (/home/riyad/Desktop/todo_wedevs/todo/node_modules/@vue/cli-service/lib/config/base.js:114:23)
    at webpackChainFns.forEach.fn (/home/riyad/Desktop/todo_wedevs/todo/node_modules/@vue/cli-service/lib/Service.js:236:40)
    at Array.forEach (<anonymous>)
    at Service.resolveChainableWebpackConfig (/home/riyad/Desktop/todo_wedevs/todo/node_modules/@vue/cli-service/lib/Service.js:236:26)
    at Service.resolveWebpackConfig (/home/riyad/Desktop/todo_wedevs/todo/node_modules/@vue/cli-service/lib/Service.js:240:48)
    at PluginAPI.resolveWebpackConfig (/home/riyad/Desktop/todo_wedevs/todo/node_modules/@vue/cli-service/lib/PluginAPI.js:132:25)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! todo@0.1.0 serve: `vue-cli-service serve`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the todo@0.1.0 serve script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/riyad/.npm/_logs/2020-08-20T11_40_44_196Z-debug.log
~~~

<strong>해결방법</strong>

~~~terminal
npm i --save-dev vue-loader-v16
~~~