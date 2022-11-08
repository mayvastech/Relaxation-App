// Grabbed container and text paragraph
const container = document.querySelector(".container")
const text = document.getElementById("#text")

// 3s breathe + 1.5s hold + 3s exhale
const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5