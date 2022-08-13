const fact1 = document.getElementById("fact-1")
const fact2 = document.getElementById("fact-2")
const fact3 = document.getElementById("fact-3")
const coffeeLists = Array.from(document.getElementsByClassName("project-pic"))
const kanyeQuotes = Array.from(document.getElementsByClassName("kanye"))



let arr = [fact1,fact2,fact3]

window.onload = () => {
for (let i = 0; i < 3; i++){

    fetch('https://uselessfacts.jsph.pl/random.json?language=en').then
    (response => response.json()).then(
        element => {
            arr[i].innerHTML = element.text
            // arr[i].style()
        }
    ).catch((() => console.log("ERROR")))

}}



for (let i = 0; i < 6; i++){

    fetch('https://dog.ceo/api/breed/shiba/images/random').then
    (response => response.json()).then(element => {
            // console.log(element)
            coffeeLists[i].src=element.message
            // arr[i].style()
        }
    ).catch((() => console.log("ERROR")))

}


for (let i = 0; i < 3; i++){
    fetch('https://api.kanye.rest/').then(response=>response.json()).then(
        element => {
            kanyeQuotes[i].innerText = element.quote
        }
    )
}





