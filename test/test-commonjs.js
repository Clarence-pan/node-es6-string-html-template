const assert = require('power-assert')

const {html, escape, raw} = require('..')

function renderArticle(data){
    return html`
<article>
    <h1>${data.title}</h1>
    ${raw(data.content)}
    <footer>${data.author} created at ${data.date}</footer>
</article>`
}

describe("Test CommonJS style modules", function(){
    it('test rendering an article', function(){
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

        // console.log('' + articleHtml)
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
})
