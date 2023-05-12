const text = document.querySelector("#text")
const btn = document.querySelector(".btn")
const image = document.querySelector("#image")
// const imageBox = document.querySelector(".img-box")

btn.addEventListener("click",()=>{
    if(text.value.trim == ""){
        alert("Please Enter your text")
    }else{
        value = text.value.trim()
        btn.innerText = "QR Generating..."
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
        image.onload =function(){
            image.classList.add = "active"
            btn.innerText = "Genrate QR"
            text.value = ""
        }
    }
})