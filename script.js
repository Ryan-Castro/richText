txtIframe.document.designMode = 'on'
txtIframe.document.body.style.color = "white"
txtIframe.document.body.style.fontFamily = 'DancingScript'
txtIframe.document.body.addEventListener('input', palavras)
txtIframe.document.execCommand('formatBlock', false, `<div>`)


function bold(){
    txtIframe.document.execCommand('bold', false, null)
}
function riscar(){
    txtIframe.document.execCommand('strikethrough', false, null)
}
function marcar(){
    let cor = txtIframe.getSelection().anchorNode.parentNode.style.backgroundColor === 'rgba(255, 0, 0, 0.81)' ? 'rgb(45, 45, 45)' : 'rgba(255, 0, 0, 0.81)'
    txtIframe.document.execCommand('backColor', false, cor)
}
function italic(){
    
    txtIframe.document.execCommand('italic', false, null)
}
function color(){
    let cor = document.querySelector("#color").value
    txtIframe.document.execCommand('foreColor', false, cor)
}

function heading(){
    let select = document.querySelector("#titulos")
    let valor = select.options[select.selectedIndex].value
    txtIframe.document.execCommand('formatBlock', false, `<${valor}>`)
}

function fontName(){
    let select = document.querySelector("#fontes")
    let valor = select.options[select.selectedIndex].value
    txtIframe.document.execCommand('fontName', false, `${valor}`)
}
function fontSize(){
    let select = document.querySelector("#size")
    let valor = select.options[select.selectedIndex].value
    txtIframe.document.execCommand('fontSize', false, `${valor}`)
}

function palavras(){
    let texto = txtIframe.document.body.innerText
    let palavras = texto.replaceAll("\n\n", '')
                        .replaceAll("\n", ' ')
                        .replaceAll('\t', '')  
                        .split([" "])

    console.log(palavras)
    document.querySelector('#palavras').innerHTML = palavras.length
}


function testar(){
    let text = txtIframe.document.body.innerHTML
    //let txtAlt = text.replace(/\n/g, "</p><p>1123344-").replace(/<p>-<\/p>/g, "")
    document.querySelector("div.output").innerHTML = text
}   

