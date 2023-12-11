"use strict";
import { db } from "../firebaseConfig";
import{ collection, getDocs, addDoc} from 'firebase/firestore';

async function getTasks(db){
}
let motivationalQuote = {
    "0": "The only people who never fail are those who never try.",
    "1": "Every failure brings with it the seed of an equivalent success.",
    "2": "Imagination is more important than knowledge.",
    "3": "The future belongs to those who believe in the beauty of their dreams.",
    "4": "You cannot depend on your eyes when your imagination is out of focus.",
    "5": "Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
    "6": "Take time to deliberate; but when the time for action arrives, stop thinking and go in.",
    "7": "A leader is a dealer in hope.",
    "8": "Business opportunities are like buses there's always another one coming.",
    "9": "Every artist was first an amateur.",
    "10": "We can do anything we want to do if we stick to it long enough.",
    "11": "Happiness is not a goal, but a by-product.",
    "12": "In all things that you do, consider the end.",
    "13": "The virtue lies in the struggle, not in the prize.",
    "14": "You miss 100 percent of the shots you don't take.",
    "15": "Success is how high you bounce after you hit bottom.",
}
document.querySelector(".moti-button").addEventListener("click",function(){
    var randomNumber=Math.random();
    var randomNumbers=Math.floor(randomNumber*15);
    console.log(randomNumbers);
    document.querySelector(".quote").innerHTML = motivationalQuote[randomNumbers]
    console.log(motivationalQuote[randomNumbers])
})
const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

const progress = document.querySelectorAll('.progressButton')
progress.forEach((progressButton) => {
    progressButton.addEventListener('click', () =>{
        removeActiveClasses()
        progressButton.classList.add('lights-up')
    })
})

function removeActiveClasses() {
    progress.forEach((progressButton) => {
        progressButton.classList.remove('lights-up')
    })
}


