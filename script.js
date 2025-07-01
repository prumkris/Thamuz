let btn = document.querySelector(".btn")
let TextCard = document.querySelector(".TextCard")

btn.innerHTML = "✅Click here to Show Thamuz's Message!"
btn.addEventListener('click', () => {
    console.log("button has been clicked!")
    if (btn.innerHTML == "✅Click here to Show Thamuz's Message!") {
        TextCard.classList.add("show")
        btn.classList.add("show")
        btn.innerHTML = "❌Click here to Close This message from Thamuz!"
    } else if ( btn.innerHTML == "❌Click here to Close This message from Thamuz!") {
        TextCard.classList.remove("show")
        btn.classList.remove("show")
        btn.innerHTML = "✅Click here to Show Thamuz's Message!"
    }




});