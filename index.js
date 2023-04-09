let quotes = document.getElementById("quotes")
let author = document.getElementById("author")
let btn = document.getElementById("btn")

let url = "https://animechan.vercel.app/api/random"

let get = () => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((item) => {
            quotes.innerText = item.quote
            author.innerText = item.character
        })
} 

window.addEventListener("load", get)
btn.addEventListener("click", get)