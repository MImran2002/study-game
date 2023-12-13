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
};
let timeOption = [ "Morning (8AM-12PM)", "Evening (12PM-6PM)", "Night(6PM-9PM)", "24/7" ]; 
let placeOption = {
    "Morning (8AM-12PM)" : {
        "Lincoln Hall" : "Enjoy your coffee at Frost Cafe, BC&T!, Alumni Building and Woods-Penn",
        "Draper Hall" : "Enjoy your coffee at Draper Building!",
        "Hutchenson Library" : "Enjoy your coffee at the Hutchenson Library!",
        "Danforth Residence" : "Enjoy your coffee at Danforth Hall and Draper Building!",
        "MAC building" : "Enjoy your coffee at the Pinncale cafe!",
        "Anna Smith Residence" : "Enjoy your coffee at Frost Cafe, BC&T!, Alumni Building and Woods-Penn",
        },
    "Evening (12PM-6PM)" : {
        "Lincoln Hall" : "Enjoy your coffee at Frost Cafe, BC&T!, Alumni Building and Woods-Penn",
        "Draper Hall" : "Enjoy your coffee at Draper Building!",
        "Hutchenson Library" : "Enjoy your coffee at the Hutchenson Library!",
        "Danforth Residence" : "Enjoy your coffee at Danforth Hall and Draper Building!",
        "MAC building" : "Enjoy your coffee at the Pinncale cafe!",
        "Anna Smith Residence" : "Enjoy your coffee at Frost Cafe, BC&T!, Alumni Building and Woods-Penn",
        },
    "Night(6PM-9PM)" : {
        "Lincoln Hall" : "Enjoy your coffee at Alumni Building and Woods-Penn",
        "Draper Hall" : "Enjoy your coffee at Draper Building!",
        "Hutchenson Library" : "Enjoy your coffee at the Hutchenson Library!",
        "Danforth Residence" : "Enjoy your coffee at Danforth Hall and Draper Building!",
        "MAC building" : "Enjoy your coffee at Alumni Building and Woods-Penn",
        "Anna Smith Residence" : "Enjoy your coffee at Alumni Building and Woods-Penn",
        },
    "24/7" : {
        "Lincoln Hall" : "Enjoy your coffee at Woods-Penn!",
        "Draper Hall" : "Enjoy your coffee at Woods-Penn!",
        "Hutchenson Library" : "Enjoy your coffee at Woods-Penn!",
        "Danforth Residence" : "Enjoy your coffee at Woods-Penn and Danforth Lobby!",
        "MAC building" : "Enjoy your coffee at Woods-Penn!",
        "Anna Smith Residence" : "Enjoy your coffee at Woods-Penn!",
        },
    };
document.querySelector(".moti-button").addEventListener("click",function(){
    var randomNumber=Math.random();
    var randomNumbers=Math.floor(randomNumber*15);
    document.querySelector(".quote").innerHTML = motivationalQuote[randomNumbers];
});
const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        removeActiveClasses();
        panel.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
        console.log("remove");
    })
};

const progress = document.querySelectorAll('.progressButton')
progress.forEach((progressButton) => {
    progressButton.addEventListener('click', () =>{
        removeLightsUpClasses();
        progressButton.classList.add('lights-up');
    })
});

function removeLightsUpClasses() {
    progress.forEach((progressButton) => {
        progressButton.classList.remove('lights-up');
    })
};

function coffee() {
    var timeIndex = document.getElementById("time").options.selectedIndex;
    var time = document.getElementById("time").options[timeIndex].text;
    var placeIndex = document.getElementById("place").options.selectedIndex;
    var place = document.getElementById("place").options[placeIndex].text;
    for (let a of timeOption){
        if ( time == a){
            let placement = placeOption[a];
            for(let b in placement){
                if ( place == b){
                let test = placeOption[a][b];
                document.getElementById("return").innerHTML = test;
                return;
            }   else {
                document.getElementById("return").innerHTML = "Enjoy your coffee at Woods-Penn!";
                };  
            };
        };
    }; 
};