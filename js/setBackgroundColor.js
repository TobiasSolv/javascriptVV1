function out(s) {console.log(s)}
out("jeg er i setBackgoundColer")

const inp = document.querySelector(".inpColor")
out(inp)

const pbColor = document.querySelector(".buttenSetColor")
out(pbColor)

const colorPicker = document.querySelector(".colorPicker")
out(colorPicker)

function setBackGroundColor(e){
    //out(e)
    out(e.key)
    const body = document.querySelector("body")
    let color = inp.value
    out(color)
    body.style.backgroundColor = color

}

function setBackgoundColorPicker(e) {
    const body = document.querySelector("body")
    let color = colorPicker.value
    out(color)
    body.style.backgroundColor = color
}

function setBackgroundHexValue() {
    inp.value = colorPicker.value

}

pbColor.addEventListener('click',setBackGroundColor)
inp.addEventListener('keyup',setBackGroundColor)
colorPicker.addEventListener('input', setBackgoundColorPicker)
colorPicker.addEventListener('change', setBackgroundHexValue)
