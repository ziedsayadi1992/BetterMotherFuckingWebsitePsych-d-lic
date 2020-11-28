
const bgBtn = document.getElementById("bg-btn")
const body=document.getElementById("body")


bgBtn.addEventListener('click',()=>{
    const header1=document.querySelector('h1')
    const headers2 = [...document.querySelectorAll("h2")]
    const headers3 = [...document.querySelectorAll("h3")]
    const headers4 = [...document.querySelectorAll("h4")]
    const paragraphes = [...document.querySelectorAll('p')]
    const spans= [...document.querySelectorAll('.span')];

    body.classList.toggle('active')
    header1.classList.toggle('active')
    headers2.forEach(h2=>{
        h2.classList.toggle('active')
    })
    headers3.forEach(h3=>{
        h3.classList.toggle('active')
    })
    headers4.forEach(h4=>{
        h4.classList.toggle('active')
    })
    paragraphes.forEach(p=>{
        p.classList.toggle('active')
    })

})

