const fact1 = document.getElementById("fact-1")
const fact2 = document.getElementById("fact-2")
const fact3 = document.getElementById("fact-3")

let arr = [fact1,fact2,fact3]

window.onload = () => {
for (let i = 0; i < 3; i++){

    fetch('https://uselessfacts.jsph.pl/random.json?language=en').then
    (response => response.json()).then(
        element => {
            arr[i].innerHTML = element.text
            arr[i].setAttribute("id", "#icon")
        }
    ).catch((() => console.log("ERROR")))

}}


