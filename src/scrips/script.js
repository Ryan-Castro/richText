txtIframe.document.designMode = 'on'
txtIframe.document.body.style.color = "white"
txtIframe.document.body.addEventListener('input', palavras)

function palavras(){
    let texto = txtIframe.document.body.innerText
    let palavras = texto.replaceAll("\n\n", '')
                        .replaceAll("\n", ' ')
                        .replaceAll('\t', '')  
                        .split([" "])
    document.querySelector('#palavras').innerHTML = palavras.length
}

function clearText(){
    let text = txtIframe.document.body.innerText
    txtIframe.document.body.innerHTML = text
    txtIframe.document.body.style.color = "white"
}   

