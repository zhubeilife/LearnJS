# Resource

## MS Learn Build a simple website using HTML, CSS, and JavaScript

https://docs.microsoft.com/en-us/learn/modules/build-simple-website/

## [廖雪峰JavaScript教程](https://www.liaoxuefeng.com/wiki/1022910821149312)

## [What Is a URL](./WhatIsAURL.md)

## [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)

The HyperText Transfer Protocol (HTTP) is the underlying **network protocol** that enables transfer of hypermedia documents on the Web, typically between a browser and a server so that humans can read them. The current version of the HTTP specification is called HTTP/2.

HTTP is **textual** (all communication is done in plain text) and **stateless** (no communication is aware of previous communications). This property makes it ideal for humans to read documents (web sites) on the world wide web. However, HTTP can also be used as a basis for REST web services from server to server or AJAX requests within web sites to make them more dynamic.

### HTTP flow

When a client wants to communicate with a server, either the final server or an intermediate proxy, it performs the following steps:

+ Open a TCP connection: The TCP connection is used to send a request, or several, and receive an answer. The client may open a new connection, reuse an existing connection, or open several TCP connections to the servers.
+ Send an HTTP message: HTTP messages (before HTTP/2) are human-readable. With HTTP/2, these simple messages are encapsulated in frames, making them impossible to read directly, but the principle remains the same. For example:

    ```http
    GET / HTTP/1.1
    Host: developer.mozilla.org
    Accept-Language: fr
    Copy to Clipboard
    ```

+ Read the response sent by the server, such as:

    ```http
    HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Server: Apache
    Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
    ETag: "51142bc1-7449-479b075b2891b"
    Accept-Ranges: bytes
    Content-Length: 29769
    Content-Type: text/html

    <!DOCTYPE html... (here come the 29769 bytes of the requested web page)
    ```

+ Close or reuse the connection for further requests.

## [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## [Cookie](https://www.liaoxuefeng.com/wiki/1022910821149312/1023022272084160)

Cookie是由服务器发送的key-value标示符。因为HTTP协议是无状态的，但是服务器要区分到底是哪个用户发过来的请求，就可以用Cookie来区分。当一个用户成功登录后，服务器发送一个Cookie给浏览器，例如user=ABC123XYZ(加密的字符串)...，此后，浏览器访问该网站时，会在请求头附上这个Cookie，服务器根据Cookie即可区分出用户。

Cookie还可以存储网站的一些设置，例如，页面显示的语言等等。

## RESTful

REST (Representational State Transfer) refers to a group of **software architecture design constraints/style** that bring about efficient, reliable and scalable distributed systems.

The basic idea of REST is that a resource, e.g. a document, is transferred via well-recognized, language-agnostic, and reliably standardized client/server interactions. Services are deemed RESTful when they adhere to these constraints.

## [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software’s business logic and display.

The three parts of the MVC software-design pattern can be described as follows:

+ Model: Manages data and business logic.
+ View: Handles layout and display.
+ Controller: Routes commands to the model and view parts.

## [Asynchronous JavaScript](./AsynchronousJavaScript.md)

## JavaScript

+ 这是因为在生产环境下，静态文件是由部署在最前面的反向代理服务器（如Nginx）处理的

## TODO

+ React

+ graphql