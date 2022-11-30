function command(command, parameter){
    txtIframe.document.execCommand(command, false, parameter)
}

function commandValue(command, selector){
    let select = document.querySelector(`#${selector}`)
    let valor = select.options[select.selectedIndex].value
    txtIframe.document.execCommand(command, false, `${valor}`)
}

function heading(){
    let select = document.querySelector(`#titulos`)
    let valor = select.options[select.selectedIndex].value
    txtIframe.document.execCommand('formatBlock', false, `<${valor}>`)
}

function marcar(){
    let cor = txtIframe.getSelection().anchorNode.parentNode.style.backgroundColor === 'rgba(255, 0, 0, 0.81)' ? 'rgb(45, 45, 45)' : 'rgba(255, 0, 0, 0.81)'
    txtIframe.document.execCommand('backColor', false, cor)
}
function color(){
    let cor = document.querySelector("#color").value
    txtIframe.document.execCommand('foreColor', false, cor)
}

document.body.addEventListener("keydown", (ev)=>{
    if(ev.ctrlKey){
        switch (ev.key) {
            case "b":command('bold', 'null');break;
            case "i":command('italic', 'null');break;
            default: console.log("os comandos que podem ser executados são: B, I");break;
        }
    }

})
