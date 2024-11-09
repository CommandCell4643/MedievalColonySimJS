
//document.addEventListener("contextmenu",function(event){
 //   event.preventDefault()
//})


window.addEventListener('load', function() {
    
})

function makeNewPerson(){
   //gender 1 === male 2 === female
   let gender = ""
   if(Math.random() < 0.5 ? 1 : 2 === 1){
     gender = "male"
   }else{
     gender = "female"

   }
    

    //name
    let chosenName = "" 

    const maleNames = ["Aldric", "Beorn", "Cedric", "Eadric", "Fendrel", "Gawain", "Haldor", "Jareth", "Kaelan", "Lothar", "Myric", "Niall", "Orwen", "Percival", "Quinlan", "Roderic", "Thrain", "Ulric", "Valen", "Wynric", "Zephyr", "Caedmon", "Drustan", "Fenwick", "Harald", "Ivar", "Kael", "Leofric", "Noric", "Owain", "Padrig", "Sigmund", "Ulfric", "Vaelin", "Wulfrun", "Zorin", "Aeron", "Ciaran", "Dain", "Eirik", "Faelan", "Haleth", "Idris", "Jory", "Kendrew", "Leoric", "Norwin", "Osgar", "Perran", "Raelin", "Sigfrid", "Uldric", "Viggo", "Wynne", "Zethar", "Aethelred", "Brynjar", "Corwin", "Eirikr", "Fendral", "Jeron", "Kelric", "Nydor", "Othric", "Phelan", "Ragnor", "Thorne", "Ulwin", "Varyn", "Wystan", "Ysger", "Zalric", "Belric", "Cuthbert", "Dorian", "Elric"];
   
    const femaleNames = ["Isolde", "Sigrid", "Ysolde", "Rowena", "Tamsin", "Ysabel", "Aelwyn", "Brynn", "Elys", "Gwynn", "Merwen", "Marwen", "Giselda", "Haleth", "Ilwen", "Lyanna", "Melisande", "Sorell", "Yrsa", "Agwyn"];
    
    if(gender === "male" ){
chosenName = maleNames[Math.floor(Math.random() * maleNames.length)]
console.log(chosenName)
    }else if(gender === "female"){
         chosenName = femaleNames[Math.floor(Math.random() * femaleNames.length)]
        console.log(chosenName)
    }

//job
    let job = "unemployed"

    //age 20-40
    let age = Math.floor(Math.random() * (41 - 20)) + 20;

    //residence
    let residence = "homeless"

    let morale = 50

    let guilty = false


    let educated = false

    let health = Math.floor(Math.random() * (91 - 50)) + 50;

    let infected = false

    let newbie = new person(gender,chosenName, job, age, residence, morale, guilty, educated, health, infected)
    
everyone.push(newbie)

let newPersonDiv = document.createElement("div")

newPersonDiv.classList.add("person")
newPersonDiv.classList.add("newPerson")
const people = document.getElementById("people")
newPersonDiv.innerText = `${newbie.name}`;
newbie.div = newPersonDiv
people.appendChild(newPersonDiv)
}


class person{
    constructor(gender, name, job, age, residence, morale, guilty, educated, health, infected){
        this.div = null
this.name = name
this.gender = gender
this.job = job
this.age = age
this.residence = residence

this.morale = morale
this.guilty = guilty
this.educated = educated
this.health = health    //0 - 100 based on plague, age, 
this.infected = infected //Can be "none" "minor <30" "major<60 " "severe>60"

    }
}

let everyone = []
let citizens = []
let prisoners = []






for(let i = 0; i<150; i++){
    makeNewPerson()
}


window.addEventListener("load",load)

function load(){

const filter = document.getElementById("filter")
filter.addEventListener("click", filterMenuOpen)

const filterToggle = document.getElementsByClassName("filterToggle")
for(let i of filterToggle){
    i.addEventListener("click", toggleUpDown)
}



const filterNames = document.getElementsByClassName("filterName")
for(let j of filterNames){
    j.addEventListener("click", selectFilter)
}
}


function filterMenuOpen(){

    const filterMenu = document.getElementById("filterMenu")
filterMenu.classList.toggle("inactive")
}

function selectFilter(){
    const allSelected = document.getElementsByClassName("selectedFilter")
    for(let i of allSelected){
        i.classList.remove("selectedFilter")
    }
switch(this.parentElement.id){
    case "age": filterByAge()
    break;
    case "health": filterByHealth()
    break;
}
const allUp = document.getElementsByClassName("up")
for(let i of allUp){
    i.classList.remove("up")
    i.innerText = "🔻"
}
    this.parentElement.classList.add("selectedFilter")
    document.getElementById("filter").innerText= "Filter: " +this.innerText
}

function toggleUpDown() {
    if (this.parentElement.classList.contains("selectedFilter")) {
     
        this.classList.toggle("up");
        if (this.classList.contains("up")) {
            this.innerText = "🔺";
        } else {
            this.innerText = "🔻";
        }
        switch(this.parentElement.id){
            case "age": filterByAge()
            break;
            case "health": filterByHealth()
            break;
        }

    }
}



function filterByAge(){
    if(document.getElementsByClassName("up").length ===1){
        everyone.sort((a, b) => b.age - a.age);
       const newPeople = document.getElementsByClassName("newPerson")
       for(let i of newPeople){
        i.remove()
       }
       everyone.forEach(newbie => {
        people.appendChild(newbie.div);
    })
    }else{
        everyone.sort((a, b) => a.age - b.age);
        console.log(everyone)
        const newPeople = document.getElementsByClassName("newPerson")
        for(let i of newPeople){
         i.remove()
        }
        everyone.forEach(newbie => {
         people.appendChild(newbie.div);
     })
    }
    console.log(9)
    
}


function filterByHealth(){
    if(document.getElementsByClassName("up").length ===1){
        everyone.sort((a, b) => b.health - a.health);
       const newPeople = document.getElementsByClassName("newPerson")
       for(let i of newPeople){
        i.remove()
       }
       everyone.forEach(newbie => {
        people.appendChild(newbie.div);
    })
    }else{
        everyone.sort((a, b) => a.health - b.health);
        console.log(everyone)
        const newPeople = document.getElementsByClassName("newPerson")
        for(let i of newPeople){
         i.remove()
        }
        everyone.forEach(newbie => {
         people.appendChild(newbie.div);
     })
    }
}