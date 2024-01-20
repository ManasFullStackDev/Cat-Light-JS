let buldImageEl = document.getElementById("bulbImage");
let catImageEl = document.getElementById("catImage");


function hideImage(){
    buldImageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("offButton").style.background="grey";
    document.getElementById("onButton").style.background="green"
}

function showImage(){
    buldImageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("offButton").style.background="red";
    document.getElementById("onButton").style.background="lightgrey"
}



document.getElementById("offButton").addEventListener('click',hideImage)

document.getElementById("onButton").addEventListener('click',showImage)