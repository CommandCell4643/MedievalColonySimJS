
//document.addEventListener("contextmenu",function(event){
 //   event.preventDefault()
//})

let wood = 10
let stone = 10



const maleNames = [
    "Adalbert", "Aethelred", "Alaric", "Aldous", "Alfred", "Amalric", "Ambrose", "Anselm", "Arnulf", "Arthur",
    "Baldric", "Balthasar", "Bardolf", "Bartholomew", "Basil", "Beowulf", "Benedict", "Bernard", "Bertram", "Bohemond",
    "Cadoc", "Caedmon", "Cassian", "Cedric", "Cenric", "Charles", "Clement", "Clovis", "Colin", "Conrad",
    "Cuthbert", "Cyprian", "Cyril", "Damien", "David", "Denis", "Dietrich", "Drogo", "Duncan", "Dunstan",
    "Edgar", "Edmund", "Edward", "Edwin", "Egbert", "Elias", "Eligius", "Emeric", "Ethelbert", "Eustace",
    "Faramund", "Felix", "Ferdinand", "Fitzroy", "Florent", "Francis", "Frederick", "Fulbert", "Fulke", "Geoffrey",
    "Gerard", "Gervase", "Gideon", "Gilbert", "Giles", "Godfrey", "Godric", "Gorlois", "Gregory", "Griffin",
    "Guy", "Hadrian", "Hal", "Hamlin", "Harold", "Henry", "Herbert", "Herlewin", "Herman", "Hildebrand",
    "Hildegard", "Hugh", "Humphrey", "Ivor", "Jacques", "James", "Jocelyn", "John", "Jordan", "Jowan",
    "Kenric", "Kurt", "Lambert", "Laurence", "Leofric", "Lothair", "Louis", "Lucas", "Luke", "Magnus",
    "Malcolm", "Matthew", "Maurice", "Melvin", "Merlin", "Milo", "Morgan", "Nigel", "Norman", "Odo",
    "Odric", "Oliver", "Osbert", "Osborn", "Oscar", "Oswald", "Otto", "Owain", "Pascal", "Patrick",
    "Percival", "Peter", "Philip", "Quentin", "Rainier", "Ranulf", "Raymond", "Reynard", "Richard", "Robert",
    "Roderick", "Roger", "Roland", "Rolf", "Roric", "Rowan", "Rufus", "Samson", "Saxon", "Seymour",
    "Simon", "Stephen", "Sylvester", "Tancred", "Theobald", "Theodoric", "Thomas", "Thurstan", "Tobias", "Tostig",
    "Tristan", "Ulrich", "Urian", "Valentine", "Victor", "Vincent", "Waleran", "Walter", "Warin", "Wilfred",
    "William", "Wymond", "Yves", "Zachary", "Abelard", "Aelfric", "Aelfwine", "Aethelbald", "Aethelstan", "Aethelwulf",
    "Aldebrand", "Alfric", "Amis", "Andreas", "Angus", "Anlaf", "Aristide", "Aubrey", "Auguste", "Baldwin",
    "Bardrick", "Bardulf", "Basa", "Becket", "Bennet", "Bernulf", "Berwin", "Blane", "Bodo", "Boudin",
    "Brice", "Brom", "Bryce", "Caden", "Caelan", "Cassianus", "Chilton", "Christof", "Clodion", "Collin",
    "Corbin", "Corwin", "Dafydd", "Dagobert", "Daileass", "Davin", "Denholm", "Derwin", "Durand", "Eamon",
    "Earnest", "Eberhard", "Ecgbert", "Eldric", "Eldwin", "Eldric", "Emerick", "Emery", "Engelbert", "Erkenbald",
    "Everard", "Falk", "Finian", "Fitzalan", "Florin", "Freithof", "Fulk", "Gaius", "Garland", "Gautier",
    "Gedeon", "Gerallt", "Gilchrist", "Giles", "Gillebert", "Glewis", "Godwin", "Gosbert", "Gosta", "Greagoir",
    "Griffith", "Gundulf", "Gunnar", "Guthrum", "Hadwin", "Haldor", "Hamond", "Haskel", "Hawkin", "Helmar",
    "Hervé", "Hughes", "Humbert", "Humberto", "Idris", "Ingmar", "Isidore", "Ivan", "Ivar", "Jacobus",
    "Jan", "Jasper", "Jean", "Jeremias", "Jodocus", "Jolyon", "Joran", "Jorn", "Julius", "Kaleb",
    "Kilian", "Klaus", "Konrad", "Leif", "Leon", "Leofwine", "Leopold", "Leroi", "Liudolf", "Llewelyn",
    "Lorant", "Lothar", "Lucius", "Maccus", "Maelgwyn", "Malger", "Maredudd", "Marek", "Maredudd", "Markward",
    "Mathurin", "Maxim", "Medwin", "Meinrad", "Melor", "M`ercher", "Merodach", "Modwen", "Morcar", "Mungo",
    "Munro", "Murchadh", "Nabil", "Nabir", "Nathair", "Neville", "Njal", "Noble", "Norval", "Olivar",
    "Orin", "Orson", "Osbeorn", "Osmund", "Osred", "Osten", "Pippin", "Praxiteles", "Radulf", "Ragnall",
    "Ranier", "Ranulph", "Raphael", "Raynald", "Reimar", "Remigius", "Remus", "Ricard", "Rico", "Rodman",
    "Rohan", "Rolfgar", "Rolwin", "Roric", "Sextus", "Sigismund", "Sindre", "Sivard", "Somerled", "Soterios",
    "Stellen", "Strachan", "Sweyn", "Talbot", "Taveon", "Tewdwr", "Thaddius", "Theodric", "Theon", "Thomond",
    "Thorbert", "Thore", "Thurman", "Tigernach", "Timm", "Tirion", "Tor", "Trefor", "Tybalt", "Tyr",
    "Uilleam", "Ulfius", "Ulfred", "Urban", "Usher", "Uthred", "Valen", "Valeran", "Viggo", "Vito",
    "Walchelin", "Warin", "Wayland", "Werner", "Weston", "Wilmar", "Witt", "Wolfgar", "Wulfric", "Wymond",
    "Xander", "Xaver", "Yvain", "Ysgramor", "Ysmir", "Yves", "Zephyr", "Zohar"
  ];
     
const femaleNames = [
    "Adelaide", "Adela", "Aldith", "Alice", "Alianor", "Alison", "Amabel", "Amice", "Anne", "Avelina",
    "Beatrice", "Blanche", "Blythe", "Berta", "Bertha", "Brunhilda", "Cecily", "Clare", "Clarice", "Constance",
    "Clemence", "Cristiana", "Dameta", "Diana", "Dulcia", "Edith", "Ela", "Elaine", "Eleanor", "Elena",
    "Elfrida", "Elinor", "Emma", "Emmeline", "Ermina", "Evelina", "Eda", "Esme", "Eda", "Edeline",
    "Frances", "Florence", "Frederica", "Freydis", "Galiana", "Giselle", "Githa", "Gwen", "Gwendolen", "Gwenllian",
    "Hadewisa", "Heloise", "Helen", "Hildegard", "Hilda", "Idony", "Isabel", "Isolde", "Ivette", "Jacoba",
    "Johanna", "Judith", "Juliana", "Jutta", "Katheryn", "Katherine", "Lettice", "Lora", "Loretta", "Lucia",
    "Lucinda", "Lucretia", "Lydia", "Mabel", "Magdalene", "Margaret", "Martha", "Matilda", "Maud", "Millicent",
    "Mildred", "Mirabelle", "Muriel", "Nest", "Nichola", "Nicola", "Olwen", "Osanna", "Pernelle", "Petronilla",
    "Philippa", "Prudence", "Rachel", "Regina", "Rosamund", "Rowena", "Sabina", "Sabine", "Salome", "Sanchia",
    "Seraphina", "Sibylla", "Susanna", "Sybil", "Tabitha", "Tamsin", "Thea", "Theodora", "Theresa", "Thomasina",
    "Tiffany", "Tilda", "Ursula", "Venetia", "Verena", "Violet", "Wilhelmina", "Willa", "Winifred", "Ysolt",
    "Ysabel", "Yvette", "Aenor", "Alfhild", "Almodis", "Ankaret", "Arbella", "Avelot", "Benigna", "Berengaria", "Blancha", "Bona",
    "Boudica", "Bridget", "Brunhild", "Cassia", "Cateline", "Clarimond", "Cristina", "Damaris", "Dionisia", "Dowsabel",
    "Elva", "Endelyn", "Etheldreda", "Fenella", "Frida", "Geralda", "Gisela", "Godelieve", "Godgifu", "Godiva",
    "Griselda", "Gudrun", "Gundred", "Gunnora", "Gunhild", "Gwenfrewi", "Hadewis", "Hawise", "Herleva", "Hilaria",
    "Hilde", "Ida", "Ingrid", "Ingeborg", "Isbel", "Jacquette", "Jocosa", "Katarin", "Kenna", "Lassota",
    "Leofrun", "Leonor", "Luitgard", "Luitgarde", "Lysanor", "Mabella", "Magdalen", "Malota", "Margery", "Mariota",
    "Marota", "Melisent", "Melisende", "Moyna", "Muriella", "Neville", "Odelia", "Oriana", "Orselina", "Osanne",
    "Osith", "Philomena", "Phelippa", "Phillida", "Pleasance", "Quenilda", "Radegund", "Ragnhild", "Ranulph", "Rosalie",
    "Rosilda", "Sabelina", "Sancha", "Sigewara", "Sigilla", "Sigourney", "Siobhan", "Swanhild", "Talitha", "Tasia",
    "Tathana", "Theophila", "Tota", "Ulrica", "Unn", "Vashti", "Veleia", "Verdell", "Walburg", "Waldefride",
    "Wendela", "Wilfreda", "Wynnefred", "Ygraine", "Ysenda", "Zabina", "Zelda", "Zenobia", "Zephirine", "Aldreda",
    "Alesta", "Alfgiva", "Alienor", "Aliz", "Alpaida", "Amelina", "Anastasia", "Andradea", "Angharad", "Arlette",
    "Arwen", "Asselina", "Astrid", "Athilda", "Basilia", "Bertaud", "Blitha", "Botilda", "Bregowine", "Caesaria",
    "Caeswintha", "Caitilin", "Camina", "Carina", "Caterina", "Celestria", "Cilminia", "Crissa", "Dervila", "Deva",
    "Douceline", "Drogo", "Edan", "Edilda", "Edina", "Edla", "Ediva", "Edvina", "Edwenna", "Eirwen",
    "Eivor", "Elaina", "Elditha", "Elfrith", "Ellinor", "Elof", "Elspeth", "Elvina", "Emblyn", "Endelienta",
    "Engelberge", "Erlina", "Ersina", "Esclarmonde", "Eseld", "Estrilda", "Estrith", "Ethena", "Ethilda", "Etona",
    "Ettelind", "Euleta", "Evalina", "Exilda", "Exira", "Eyfura", "Fara", "Fastrada", "Finola", "Flora",
    "Forwina", "Frideswide", "Froila", "Fulberta", "Garsenda", "Gauthild", "Gela", "Gerla", "Geralda", "Germa",
    "Gertruda", "Gisla", "Gledhild", "Godelief", "Godgifu", "Godrun", "Goneril", "Gudula", "Gundred", "Gyda",
    "Gytha", "Gythwyn", "Hadwisa", "Hanna", "Hecate", "Helewidis", "Hilda", "Hildeva", "Hodne", "Hodierna",
    "Hugolina", "Ines", "Irmintrude", "Isanna", "Isentrude", "Isgard", "Isrun", "Jordaine", "Joscelin", "Kaiza",
    "Kirstine", "Kristina", "Lailoken", "Lambhilda", "Lauretta", "Leocadia", "Leodegund", "Lilyth", "Lineta", "Liva",
    "Livilda", "Lleucu", "Loe", "Loysetta", "Lutgard", "Mabile", "Mafalda", "Magnilda", "Malda", "Malen",
    "Malgwyn", "Malisende", "Malvina", "Mania", "Marga", "Margot", "Marsilia", "Martine", "Matelena", "Maura",
    "Mavelle", "Meliora", "Melisane", "Melicent", "Melisind", "Merewen", "Merrona", "Minna", "Modwen", "Modwina",
    "Morrighan", "Nadia", "Nagla", "Nela", "Nelva", "Nerilla", "Neslia", "Nessa", "Nevra", "Nicasia",
    "Nigella", "Nimue", "Norena", "Normanda", "Odda", "Odelie", "Odessa", "Ofelia", "Ofredina", "Oisilla",
    "Oliva", "Orabilia", "Osburgh", "Osburgha", "Osfleda", "Oslafa", "Osmunda", "Oswina", "Pavia", "Pelagia",
    "Pelgrina", "Petrea", "Phillippa", "Piroska", "Prisca", "Pyro", "Raisa", "Regula", "Reinalda", "Reverina",
    "Rhaessa", "Rosaline", "Rosilena", "Rotruda", "Runa", "Sabby", "Sabinna", "Sapphira", "Scholastica", "Sedonia",
    "Selwyn", "Semantha", "Senguin", "Sera", "Siby", "Sigla", "Sigurd"]

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

   
    
    if(gender === "male" ){
let randomNum = Math.floor(Math.random() * maleNames.length)
chosenName = maleNames[randomNum]
maleNames.splice(randomNum, 1)

}else if(gender === "female"){
    let randomNum = Math.floor(Math.random() * femaleNames.length)
    chosenName = femaleNames[randomNum]
    femaleNames.splice(randomNum, 1)
       
    }



//job
    let job = "unemployed"

    //age 20-40
    let age = Math.floor(Math.random() * (41 - 20)) + 20;

    //residence
    let residence = "homeless"

    let morale = 50

    let moraleBreakDown = []

    let guilty = false


    let health = Math.floor(Math.random() * (91 - 50)) + 50;

    let sick = false
    let starving = false
    let wounded = false  

    let newbie = new person(gender,chosenName, job, age, residence, morale, guilty, health, sick, starving, wounded)
    
everyone.push(newbie)

let newPersonDiv = document.createElement("div")

newPersonDiv.classList.add("person")
newPersonDiv.classList.add("newPerson")
const people = document.getElementById("people")
newPersonDiv.innerText = `${newbie.name}`;
newbie.div = newPersonDiv
people.appendChild(newPersonDiv)
newPersonDiv.id = chosenName

newPersonDiv.addEventListener("click", function(event){
selectPerson(event.target)
})
}


class person{
    constructor(gender, name, job, age, residence, morale, guilty, health, sick, starving, wounded){
        this.div = null
this.name = name
this.gender = gender
this.job = job
this.age = age
this.residence = residence

this.morale = morale
this.guilty = guilty

this.health = health    //0 - 100 based on plague, age, 
this.sick = sick
this.wounded = wounded
this.starving = starving //Can be "none" "minor <30" "major<60 " "severe>60"

    }
}

let everyone = []
let citizens = []
let prisoners = []






for(let i = 0; i<2; i++){
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



const filterOptions = document.getElementsByClassName("filterOption")
for(let j of filterOptions){
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
switch(this.id){
    case "age": filterByAge()
    break;
    case "health": filterByHealth()
    break;
}

    this.classList.add("selectedFilter")
    const allUp = document.getElementsByClassName("up")
for(let i of allUp){
    if(!i.parentElement.classList.contains("selectedFilter")){
    i.classList.remove("up")
    i.innerText = "▼"
    }


}
    
}

function toggleUpDown() {
    if (this.parentElement.classList.contains("selectedFilter")) {
     
        this.classList.toggle("up");
        if (this.classList.contains("up")) {
            this.innerText = `▲`;
        } else {
            this.innerText = `▼ `;
        }
        switch(this.parentElement.id){
            case "age": filterByAge()
            break;
            case "health": filterByHealth()
            break;
        }

    } else{
        console.log(null)
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
        const newPeople = document.getElementsByClassName("newPerson")
        for(let i of newPeople){
         i.remove()
        }
        everyone.forEach(newbie => {
         people.appendChild(newbie.div);
     })
    }
    document.getElementById("filter").innerText= "Filter: " + "Age"

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
    document.getElementById("filter").innerText= "Filter: " + "Health"

}










const tooltip = document.getElementById('tooltip');
        const triggers = document.querySelectorAll('.tooltip-trigger');

        // Function to update tooltip position based on cursor position in percentages
        function updateTooltipPosition(event) {
            // Calculate cursor position as a percentage of the viewport
            const cursorXPercent = (event.clientX / window.innerWidth) * 100;
            const cursorYPercent = (event.clientY / window.innerHeight) * 100;
        
            // Default tooltip offsets
            let tooltipXPercent = cursorXPercent - (tooltip.offsetWidth / window.innerWidth) * 50; // Center horizontally
            let tooltipYPercent = cursorYPercent + .5; // Position below by default
        
            // If cursor is in the bottom half of the screen, position tooltip above
            if (cursorYPercent > 50) {
                tooltipYPercent = cursorYPercent - .5 - (tooltip.offsetHeight / window.innerHeight) * 100; // Position above
            }
        
            // Set tooltip position using calculated percentages
            tooltip.style.left = tooltipXPercent + '%';
            tooltip.style.top = tooltipYPercent + '%';

           

        }
        

        // Show tooltip on hover
        triggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', (event) => {
                // Get the value from the data-value attribute
                const dataValue = event.target.getAttribute('data-value');
                
                // Update tooltip text with the data-value
                tooltip.innerHTML = dataValue;
                let div = document.getElementById("resources")
                let text = div.innerHTML.split('<br>')
                let resourceReq = text.map(row => {
                    let [quantity, resource] = row.trim().split(' ');
                    console.log([quantity,resource])
                    return { quantity: parseInt(quantity, 10), resource: resource.trim()};
                })
                console.log(resourceReq)
                resourceReq.forEach((req,index)=>{
                    if((req.resource === 'wood' && wood >=req.quantity)||
                    (req.resource === 'stone' && stone >=req.quantity)){
                        text[index] = `<span class="sufficient">${text[index]}</span>`
                    }else{
                        text[index] = `<span class="insufficient">${text[index]}</span>`
                    }
                }) 
                div.innerHTML = text.join('<br>');



                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
                updateTooltipPosition(event);
            });

            // Update tooltip position on mouse move
            trigger.addEventListener('mousemove', updateTooltipPosition);

            // Hide tooltip on mouse leave
            trigger.addEventListener('mouseleave', () => {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            });
        });






        function selectPerson(personDiv){
let chosenPersonId = personDiv.id
console.log(everyone)
let personObj = searchPerson(everyone, "name", chosenPersonId)

changeToPerson(personObj)




        }

        function searchPerson(array, name, chosenPersonId){
            console.log(array, name, chosenPersonId)
           return array.find(obj =>obj[name]===chosenPersonId)
        }





function changeToPerson(personObj){
    document.getElementById("construction").style.display = "none"
        document.getElementById("personMenu").style.display = "grid"

document.getElementById("healthData").innerText = `Health: ${personObj.health}`
document.getElementById("moraleData").innerText = `Morale: ${personObj.morale}`
document.getElementById("ageData").innerText = `Age: ${personObj.age}`
document.getElementById("genderData").innerText = `Gender: ${personObj.gender}`

    if(personObj.sick === true){
        document.getElementById("sick").style.display = 'flex'
    }
    if(personObj.guilty === true){
        document.getElementById("guilty").style.display = 'flex'
    }
    if(personObj.wounded === true){
        document.getElementById("wounded").style.display = 'flex'
    }
    if(personObj.starving === true){
        document.getElementById("starving").style.display = 'flex'
    }
}





function switchToConstruction(){

}

function switchToEmployment(){

}


function switchToJustice(){
    
}












