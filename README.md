# ES6 string HTML template

[![NPM version][npm-image]][npm-url]
![Stability][stability]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![NPM download][download-image]][download-url]


[npm-image]: https://img.shields.io/npm/v/es6-string-html-template.svg?style=flat-square
[npm-url]: https://npmjs.org/package/es6-string-html-template
[stability]: https://img.shields.io/badge/stability-stable-brightgreen.svg
[travis-image]: https://img.shields.io/travis/Clarence-pan/node-es6-string-html-template.svg?style=flat-square
[travis-url]: https://travis-ci.org/Clarence-pan/node-es6-string-html-template
[codecov-image]: https://codecov.io/gh/Clarence-pan/node-es6-string-html-template/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/Clarence-pan/node-es6-string-html-template
[david-image]: https://img.shields.io/david/Clarence-pan/node-es6-string-html-template.svg?style=flat-square
[david-url]: https://david-dm.org/Clarence-pan/node-es6-string-html-template
[snyk-image]: https://snyk.io/test/npm/es6-string-html-template/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/es6-string-html-template
[download-image]: https://img.shields.io/npm/dm/es6-string-html-template.svg?style=flat-square
[download-url]: https://npmjs.org/package/es6-string-html-template



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