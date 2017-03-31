import assert from 'power-assert'

import {html, escape, raw} from '..'

function renderArticle({title, content, author, date}){
    return html`
<article>
    <h1>${title}</h1>
    ${raw(content)}
    <footer>${author} created at ${date}</footer>
</article>`
}

describe("Test ES6 style modules", function(){
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

    const expected = `
<article>
    <h1>Jim&#39;s daily</h1>
    <ol>
                    <li>Open computer</li>
                    <li>Write <code>console.log("Hello world!")</code>
                    </li>
                </ol>
    <footer>Tom created at 2017-04-01</footer>
</article>`

    assert(articleHtml + '' === expected)
})
