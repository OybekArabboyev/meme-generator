const topInput = document.querySelector(".one")
const downInput = document.querySelector(".two")
const topText = document.querySelector(".top")
const downText = document.querySelector(".down")
const btn = document.querySelector('button')
const div = document.querySelector(".div")

btn.addEventListener("click", ()=>{
    topText.textContent = topInput.value
    downText.textContent = downInput.value

    htmlToImage.toPng(div).then(function (url) {
        let a = document.createElement("a");
        a.href = url;
        a.download = "meme.png";
        a.click()
    })
})


