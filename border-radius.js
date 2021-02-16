
function adjustBR(){
    var toplefty = Number(document.querySelector('input#top-lefty').value)
    var topleftx = Number(document.querySelector('input#top-leftx').value)
    var toprighty = Number(document.querySelector('input#top-righty').value)
    var toprightx = Number(document.querySelector('input#top-rightx').value)
    
    var bottomlefty = Number(document.querySelector('input#bottom-lefty').value)
    var bottomleftx = Number(document.querySelector('input#bottom-leftx').value)
    var bottomrighty = Number(document.querySelector('input#bottom-righty').value)
    var bottomrightx = Number(document.querySelector('input#bottom-rightx').value)
    
    
    

    var border = document.querySelector('div.section')
    border.style.borderRadius = `${topleftx}% ${toprightx}% ${bottomrightx}% ${bottomleftx}% / ${toplefty}% ${toprighty}% ${bottomrighty}% ${bottomlefty}%`/*(eixo x) top-left top-rigth bottom-right bottom-left / (eixo y) top-left top-right bottom-right bottom-left */

}

function copy(){
    var toplefty = Number(document.querySelector('input#top-lefty').value)
    var topleftx = Number(document.querySelector('input#top-leftx').value)
    var toprighty = Number(document.querySelector('input#top-righty').value)
    var toprightx = Number(document.querySelector('input#top-rightx').value)

    var bottomlefty = Number(document.querySelector('input#bottom-lefty').value)
    var bottomleftx = Number(document.querySelector('input#bottom-leftx').value)
    var bottomrighty = Number(document.querySelector('input#bottom-righty').value)
    var bottomrightx = Number(document.querySelector('input#bottom-rightx').value)

    var texto = `border-radius: ${topleftx}% ${toprightx}% ${bottomrightx}% ${bottomleftx}% / ${toplefty}% ${toprighty}% ${bottomrighty}% ${bottomlefty}%`
    
    // document.execCommand("copy");

    // alert("Copied the text: " + texto);
    window.alert('Text copied')
    navigator.clipboard.writeText(texto);
    
}