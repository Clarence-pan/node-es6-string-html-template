const assert = require('power-assert')

const {html, escape, raw} = require('../lib/index.js')

function renderArticle(data){
    return html`
<article>
    <h1>${data.title}</h1>
    ${raw(data.content)}
    <footer>${data.author} created at ${data.date}</footer>
</article>`
}

describe("Test CommonJS style modules", function(){
    it('Simple html should OK', function(){
        let rendered = html`<p class="test">Hello world!</p>`
        let expected = `<p class="test">Hello world!</p>`
        assert(expected === rendered + '')
    })

    it('Simple list render should OK - nested Arrays will be expanded', function(){
        let rendered = html`<ol class="test">${[1,2,3].map(x => html`<li>${x * 2}</li>`)}</ol>`
        let expected = `<ol class="test"><li>2</li><li>4</li><li>6</li></ol>`
    })

    it('Varables will be escaped by default - avoiding xss', function(){        
        let rendered = html`<p class="test">${`<b>Hello</b>`} world!</p>`
        let expected = `<p class="test">&lt;b&gt;Hello&lt;/b&gt; world!</p>`
        assert(expected === rendered + '')
    })

    it('Use raw() to avoid escape', function(){        
        let rendered = html`<p class="test">${raw(`<b>Hello</b>`)} world!</p>`
        let expected = `<p class="test"><b>Hello</b> world!</p>`
        assert(expected === rendered + '')
    })
    
    it('If you do NOT like to use raw(), use html() as function instead', function(){
        let rendered = html(`<p class="test">Hello world!</p>`)
        let expected = `<p class="test">Hello world!</p>`
        assert(expected === rendered + '')

        
        rendered = html`<p class="test">${html(`<b>Hello</b>`)} world!</p>`
        expected = `<p class="test"><b>Hello</b> world!</p>`
        assert(expected === rendered + '')
    })

    it('A complex test: rendering an article', function(){
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

        assert(expected === articleHtml + '')
    })

    it("Begining and ending spaces can be trimmed, but middle spaces will not -- useful for jQuery", function(){
        let rendered = html.trim`
<ol class="test">
    ${[1,2,3].map(x => html`<li>${x * 2}</li>`)}
</ol>
`
        let expected = `<ol class="test">
    <li>2</li><li>4</li><li>6</li>
</ol>`
        assert(expected === rendered + '')
    })
    
    
})
