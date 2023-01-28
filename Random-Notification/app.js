const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const messages=[
    "Good morning",
    "Good afternoon",
    "Good night",
    "Good bye",
    "I am fine",
    "Thank you",
    "Love you",
    "Hi",
    "Hello World",
    "tawananan"
]

btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText=randomMessage()
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove()
    },3000)
}

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}