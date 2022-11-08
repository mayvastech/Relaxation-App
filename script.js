// Grabbed container and text paragraph
const container = document.querySelector(".container")
const text = document.getElementById("#text")

// 3s breathe + 1.5s hold + 3s exhale
const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

function breatheAnimation() {
    text.innerHTML = "Breathe in"
    container.className = "container grow"

    setTimeout(() => {
        text.innerText = "Hold"

        setTimeout(() => {
            text.innerText = "Breathe out"
        }, holdTime)
    }, breatheTime)
}