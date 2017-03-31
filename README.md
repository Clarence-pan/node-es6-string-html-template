# ES6 string HTML template

[![npm version](https://img.shields.io/npm/v/es6-string-html-template.svg)](https://www.npmjs.com/package/es6-string-html-template)
![Stability](https://img.shields.io/badge/stability-stable-brightgreen.svg)
[![](https://travis-ci.org/Clarence-pan/node-es6-string-html-template.svg?branch=master)](https://travis-ci.org/Clarence-pan/node-es6-string-html-template)

It is a brief HTML template using ES6 string template.

# Install

```
npm install --save es6-string-html-template
```

# Usage Example

## ES6 modules:

```js
import {html, escape, raw} from 'es6-string-html-template'

function renderArticle({title, content, author, date}){
    return html`
<article>
    <h1>${title}</h1>
    ${raw(content)}
    <footer>${author} created at ${date}</footer>
</article>`
}

let articleHtml = renderArticle({
    title: `Jim's daily`,
    content: `<ol>
                <li>Open computer</li>
                <li>Write <code>console.log("Hello world!")</code>
                </li>
              </ol>`,
    author: 'Tom',
    date: '2017-04-01',
})

console.log('' + articleHtml)

// output:
// <article>
//     <h1>Jim&#39;s daily</h1>
//     <ol>
//                 <li>Open computer</li>
//                 <li>Write <code>console.log("Hello world!")</code>
//                 </li>
//               </ol>
//     <footer>Tom created at 2017-04-01</footer>
// </article>

```

## CommonJs modules:

```js
const {html, escape, raw} = require('es6-string-html-template')

function renderArticle(data){
    return html`
<article>
    <h1>${data.title}</h1>
    ${raw(data.content)}
    <footer>${data.author} created at ${data.date}</footer>
</article>`
}

let articleHtml = renderArticle({
    title: `Jim's daily`,
    content: `<ol>
                <li>Open computer</li>
                <li>Write <code>console.log("Hello world!")</code>
                </li>
              </ol>`,
    author: 'Tom',
    date: '2017-04-01',
})

console.log('' + articleHtml)
// output:
//
// <article>
//     <h1>Jim&#39;s daily</h1>
//     <ol>
//                 <li>Open computer</li>
//                 <li>Write <code>console.log("Hello world!")</code>
//                 </li>
//               </ol>
//     <footer>Tom created at 2017-04-01</footer>
// </article>
```