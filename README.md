# Resource

## MS Learn Build a simple website using HTML, CSS, and JavaScript

https://docs.microsoft.com/en-us/learn/modules/build-simple-website/

## [What Is a URL](./WhatIsAURL.md)

## [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)

The HyperText Transfer Protocol (HTTP) is the underlying **network protocol** that enables transfer of hypermedia documents on the Web, typically between a browser and a server so that humans can read them. The current version of the HTTP specification is called HTTP/2.

HTTP is **textual** (all communication is done in plain text) and **stateless** (no communication is aware of previous communications). This property makes it ideal for humans to read documents (web sites) on the world wide web. However, HTTP can also be used as a basis for REST web services from server to server or AJAX requests within web sites to make them more dynamic.

## [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## [Cookie](https://www.liaoxuefeng.com/wiki/1022910821149312/1023022272084160)

Cookie是由服务器发送的key-value标示符。因为HTTP协议是无状态的，但是服务器要区分到底是哪个用户发过来的请求，就可以用Cookie来区分。当一个用户成功登录后，服务器发送一个Cookie给浏览器，例如user=ABC123XYZ(加密的字符串)...，此后，浏览器访问该网站时，会在请求头附上这个Cookie，服务器根据Cookie即可区分出用户。

Cookie还可以存储网站的一些设置，例如，页面显示的语言等等。

