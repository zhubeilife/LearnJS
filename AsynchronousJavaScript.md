# Asynchronous JavaScript

## Link

+ [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

## Follow me

### Why need Asynchronous code

+ In its most basic form, JavaScript Runtime is a synchronous, blocking, single-threaded language, in which only one operation can be in progress at a time.

+ There are some I/O operation is time assuming.

### Asynchronous in JavaScript

There are two main types of asynchronous code style you'll come across in JavaScript code:

+ old-style callbacks
+ newer promise-style code.

#### Async callbacks

Async callbacks are functions that are specified as arguments when calling a function which will start **executing code in the background**. When the background code finishes running, it calls the callback function to let you know the work is done, or to let you know that something of interest has happened.

```js
// example from https://1sherlynn.medium.com/how-to-handle-errors-in-asynchronous-javascript-code-when-working-with-callbacks-dcd32bca4b6b

function calculateSquare(number, callback) {
  setTimeout(() => {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected."));
      return;
  }
  const result = number * number;
  callback(null, result);
  }, 1000);
}

/*
Error-first callback:
The first argument of the callback is usually named error, whereby if something goes wrong in the asynchronous function, then the callback gets called with the first argument which specifies what error has happened.
If everything goes well, then the first argument will be null.
*/
let callback = (error, result) => {
  if (error !== null) {
  console.log("Caught error: " + String(error));
  return;
  }
  console.log(result);
};
```

#### Promises

```js
fetch('products.json').then(function (response) {
    return response.json();
}).then(function (json) {
    let products = json;
    initialize(products);
}).catch(function (err) {
    console.log('Fetch problem: ' + err.message);
});
```

#### [Promises versus callbacks](Promises versus callbacks)

Promises have some similarities to old-style callbacks. They are essentially a returned object to which you attach callback functions, rather than having to pass callbacks into a function.

However, promises are specifically made for handling async operations, and have many advantages over old-style callbacks:

+ You can chain multiple async operations together using multiple .then() operations, passing the result of one into the next one as an input. This is much harder to do with callbacks, which often ends up with a messy "pyramid of doom" (also known as callback hell).
+ Promise callbacks are always called in the strict order they are placed in the event queue.
+ Error handling is much better — all errors are handled by a single .catch() block at the end of the block, rather than being individually handled in each level of the "pyramid".
+ Promises avoid inversion of control, unlike old-style callbacks, which lose full control of how the function will be executed when passing a callback to a third-party library.

#### yield/generators

Generators let you 'pause' individual functions without pausing the state of the whole program, which at the cost of slightly more complex to understand code lets your async code appear to execute in a top-down fashion.

#### Async/await

Syntactic **sugar** built on top of promises that allows you to run asynchronous operations using syntax that's more like writing synchronous callback code.

##### Async

Async keyword is added to functions to tell them to return a promise rather than directly returning the value.

```js
let hello = async function() { return "Hello" };
hello().then((value) => console.log(value));
```

##### Await

await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

```js
async function hello() {
  return await Promise.resolve("Hello");
};

hello().then(alert);
```
