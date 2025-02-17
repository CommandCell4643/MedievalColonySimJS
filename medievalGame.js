
document.addEventListener("contextmenu",function(event){
    event.preventDefault()
})
switchToConstruction()

document.addEventListener("click", () => {
    Promise.resolve().then(updateInformation);
});
document.addEventListener("contextmenu", () => {
    Promise.resolve().then(updateInformation);
});

let activeMercenaries=[]
let inactiveMercenaries=[]

let mercenaryCost = 0
let mercenaryPower = 0
let day = 0

let maxPrisoners = 0;
let taxRate = 0;

let woodDaily;
let ironDaily;
let cropsDaily;
let mealsDaily;
let aleDaily;
let stoneDaily;
let weaponsDaily;
let goldDaily;

let personObj;
let wood = 100
let stone = 100
let crops = 1000
let meals = 100000  
let gold = 100
let iron = 0
let ale = 0
let weapons = 5

let homelessSpace = '∞'
let hovelSpace = 0
let longhouseSpace = 0
let cottageSpace = 0
let townhouseSpace = 0
let manorSpace = 0

let homelessResidents = 0
let hovelResidents = 0
let longhouseResidents = 0
let cottageResidents= 0
let townhouseResidents = 0
let manorResidents = 0


let woodMax = 150
let stoneMax = 100
let cropsMax = 1000
let mealsMax = 50000
let goldMax = 10000
let ironMax = 0
let aleMax = 0
let weaponsMax = 5





const jobCounts = {
    woodcutter: 0,
    blacksmith: 0,
    brewer: 0,
    cook: 0,
    farmer: 0,
    miner: 0,
    quarrier: 0,
    hunter: 0,
    constable: 0,
    soldier: 0,
    actor: 0,
    doctor: 0,
    barkeep: 0,
    carpenter: 0,
};


let actorMax = 0;
let doctorMax = 0;
let barkeepMax = 0;
let blacksmithMax = 0;
let brewerMax = 0;
let cookMax = 0;
let farmerMax = 0;
let hunterMax = 0;
let woodcutterMax = 0;
let minerMax = 0;
let quarrierMax = 0;
let constableMax = 0;
let soldierMax = 5;

let currentBuilding;



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
    let employment = "unemployed"
    //age 20-40
    let age = Math.floor(Math.random() * (41 - 20)) + 20;

    //residence
    let residence = "homeless"

    let morale = 50

    let moraleBreakDown = [new moraleType("Initial Optimism",30,200,"initial")]
    let healthBreakDown = []



    let health = 100


    let newbie = new person(gender,chosenName, employment, age, residence, morale, health, moraleBreakDown,healthBreakDown
    )
    
everyone.push(newbie)
citizens.push(newbie)


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
class moraleType{
    constructor(name,amount,daysActive,type){
    this.name = name
    this.amount = amount
    this.daysActive = daysActive
    this.type=type

    }
}

class healthType{
    constructor(name,severity,type){
        this.name = name
        this.daysActive = 1
        this.severity = severity
        this.type = type
    
        }
}

class person{
    constructor(gender, name, employment, age, residence, morale,  health, moraleBreakDown,healthBreakDown
    ){
        this.div = null
this.name = name
this.gender = gender
this.employment = employment
this.age = age
this.residence = residence
this.moraleBreakDown = moraleBreakDown
this.healthBreakDown = healthBreakDown
this.morale = morale

this.health = health    //0 - 100 based on plague, age, 

this.foodStatus = 7

    }

    eatfood(){

        if(meals>=3){
            this.foodStatus++
            meals-=3
            this.addMoraleEffect(new moraleType("Ate Meal",5,1,'food'))
            

        }else if(crops >=30){
            this.foodStatus++
            crops-=30
            this.addMoraleEffect(new moraleType("Ate Raw Crops",-5,1,'food'))
 
        }else{
            this.foodStatus--
            this.addMoraleEffect(new moraleType("Didn't Eat",-15,1,'food'))

            if(this.foodStatus === 0){
                killPerson(this)
            }

        }
        if(this.foodStatus >= 7){
            this.foodStatus = 7

        } 

    

    }
    moodCheckTaxes(){
        switch(taxRate){
    case 0: this.addMoraleEffect(new moraleType("No taxes",10,1,'taxes'))
break;
    case 1: this.addMoraleEffect(new moraleType("Low taxes",5,1,'taxes'))
    break;
    case 2: this.addMoraleEffect(new moraleType("Fair taxes",3,1,'taxes'))
break;
    default:this.addMoraleEffect(new moraleType("High taxes",(-5*(taxRate-2)),1,'taxes'))

        }
    }

    moodCheckResidence(){
        if(this.residence === 'homeless'){ 
            this.addMoraleEffect(new moraleType("Homeless",-15,1,'residence'))
        }else if(this.residence === 'hovel'){
            this.addMoraleEffect(new moraleType("Living in Hovel",-10,1,'residence'))
        }else if(this.residence ==='longhouse'){
            this.addMoraleEffect(new moraleType("Living in Longhouse",-5,1,'residence'))
        }else if(this.residence === 'townhouse'){
            this.addMoraleEffect(new moraleType("Living in Townhouse",5,1,'residence'))
        }else if(this.residence === 'manor'){
            this.addMoraleEffect(new moraleType("Living in Manor",20,1,'residence'))
        }
        return;
    }


    moodCheckHealth(){
        if(this.health>=90){
            this.addMoraleEffect(new moraleType('Amazing health',10,1,'health'))
        }else if(this.health>=80){
            this.addMoraleEffect(new moraleType('Decent health',5,1,'health'))
        }else if(this.health>=70){
            this.addMoraleEffect(new moraleType('Mediocre health',3,1,'health'))
        }else if(this.health>=20){
            this.addMoraleEffect(new moraleType('Poor health',Math.floor((this.health-100) /3),1,'health'))

        }else{
            this.addMoraleEffect(new moraleType('Detrimental health',-30,1,'health'))

        }
    }
addHealthEffect(effect){
    let index = this.healthBreakDown.findIndex(e => e.name === effect.name);

    if (index !== -1) {
        
    }else{
        this.healthBreakDown.push(effect); 
    }
        
        this.updateHealth(true)


    }
    //everyone[0].addHealthEffect(new healthType('plague',5,'plague',))

   

    updateHealth(skip){
        this.health = 100
        this.healthBreakDown.forEach(effect => {
            this.health-=healthDecayPlagueWounded(effect)


           if(skip===false){
                effect.daysActive++
           }
        })

        let oldAgeDebuff = Math.floor(healthDecayAge(this.age))

        this.health -=  oldAgeDebuff

if(this.health<=0){
    addEventLog(`${this.name} has died of health concerns`)
    killPerson(this)
    switchToConstruction()
}


        this.health = Math.max(0, Math.min(100, this.health));



    }
    

    addMoraleEffect(effect){
       
        let index = this.moraleBreakDown.findIndex(e => e.type === effect.type);

    if (index !== -1) {
        this.moraleBreakDown.splice(index, 1);
    }
        this.moraleBreakDown.push(effect); 
        
        this.updateMorale(true)


    }

    updateMorale(skip) {
        this.morale=50
         this.moraleBreakDown.forEach(effect => {
        if(skip===false){
            if(typeof effect.daysActive !== 'string'){
                effect.daysActive--;        

                if(effect.daysActive < 0){
                    this.morale -= effect.amount
                    let index = this.moraleBreakDown.findIndex(e => e.name === effect.name);
                    this.moraleBreakDown.splice(index, 1);
                }                

            }  
        }
        this.morale += effect.amount;

          this.morale = Math.max(0, Math.min(100, this.morale));

            
            
            });
    
    }

}
let everyone = []
let citizens = []  
let prisoners = []

function healthDecayAge(a, k=5, r=0.08){
    return Math.max(0,k * Math.exp(r * (a - 20))-5);

}
 function determinePeoplePlagued(){
    let peoplePlagued = 0
    for(let i of citizens){
        for(let j of i.healthBreakDown){
            if(j.type == 'plague'){
                peoplePlagued++
            }
        }
    }
    return peoplePlagued;
 }

function killPerson(person) {
    let index = everyone.findIndex(e => e.name === capitalizeWords(person.name));
    if (index !== -1) {
        everyone.splice(index, 1);
    }

    let citizenIndex = citizens.findIndex(e => e.name === capitalizeWords(person.name));
    if (citizenIndex !== -1) {
        citizens.splice(citizenIndex, 1);
    } else {
        let prisonerIndex = prisoners.findIndex(e => e.name === capitalizeWords(person.name));
        if (prisonerIndex !== -1) {
            prisoners.splice(prisonerIndex, 1);
        }
    }
personObj = ''
    document.getElementById(person.name).remove();
}
function calculateTreatment(){
    console.log(8888)

    let poorCitizens = findPoor(citizens)
    let poorPrisoners= findPoor(prisoners)
    let tempArrayCitizens = poorCitizens.sort((a, b) => a.health - b.health)
    let tempArrayPrisoners = poorPrisoners.sort((a, b) => a.health - b.health)
    let orderTreatment = tempArrayCitizens.concat(tempArrayPrisoners)
    console.log(orderTreatment)
    for(let i = 0;i<jobCounts.doctor; i++){
        if(orderTreatment[i]){
            treatPatient(orderTreatment[i])
        }
   
    }
}
function findPoor(array){
    let newArray = []

for(let i of array){
    if (i.healthBreakDown.some(e => e.type === "plague" || e.type === "wounded")) {
        newArray.push(i)
    }
    
} 
return newArray;
}

function treatPatient(person){

    if(person.healthBreakDown.some(e => e.type === 'plague')){
        let index = person.healthBreakDown.findIndex(e => e.type === 'plague')
        let severity = person.healthBreakDown[index].severity
        if(severity === 1){
        if(Math.random()<.14){
            let index = person.healthBreakDown.findIndex(e => e.type === 'plague')
            person.healthBreakDown.splice(index,1)
            person.addMoraleEffect('Cured',10,100,'cure')
        }


        }else if(severity === 3){
            if(Math.random()<.11){
                let index = person.healthBreakDown.findIndex(e => e.type === 'plague')
                person.healthBreakDown.splice(index,1)
                person.addMoraleEffect('Cured',10,100,'cure')
            }
        }else if(severity === 5){

            if(Math.random()<.7){
                let index = person.healthBreakDown.findIndex(e => e.type === 'plague')
                person.healthBreakDown.splice(index,1)
                person.addMoraleEffect('Cured',10,100,'cure')
            }


        }else if(severity === 10){
            if(Math.random()<.3){
                let index = person.healthBreakDown.findIndex(e => e.type === 'plague')
                person.healthBreakDown.splice(index,1)
                person.addMoraleEffect('Cured',10,100,'cure')
            }
    }
} else if(person.healthBreakDown.some(e => e.type === 'wounded')){
    let index = person.healthBreakDown.findIndex(e => e.type === 'wounded')
        let severity = person.healthBreakDown[index].severity
        if(severity === 1){
        if(Math.random()<.14){
            let index = person.healthBreakDown.findIndex(e => e.type === 'wounded')
            person.healthBreakDown.splice(index,1)
            person.addMoraleEffect('Healed',10,100,'heal')
        }


        }else if(severity === 3){
            if(Math.random()<.11){
                let index = person.healthBreakDown.findIndex(e => e.type === 'wounded')
                person.healthBreakDown.splice(index,1)
                person.addMoraleEffect('Healed',10,100,'heal')
            }
        }else if(severity === 5){

            if(Math.random()<.7){
                let index = person.healthBreakDown.findIndex(e => e.type === 'wounded')
                person.healthBreakDown.splice(index,1)
                person.addMoraleEffect('Healed',10,100,'heal')
            }


        }else if(severity === 10){
            if(Math.random()<.3){
                let index = person.healthBreakDown.findIndex(e => e.type === 'wounded')
                person.healthBreakDown.splice(index,1)
                person.addMoraleEffect('Healed',10,100,'heal')
            }
    }
}

}
function  healthDecayPlagueWounded(effect){
    return Math.floor(effect.severity*Math.exp(0.15*effect.daysActive));
}

for(let i = 0; i<15; i++){
    makeNewPerson()
    
}


class building{

    constructor(name, workNeeded){




this.name = name
this.workNeeded = workNeeded
this.workProgress = 0

    }
    progress(){
        this.workProgress += (jobCounts.carpenter + .5*prisoners.length)
        if (this.workProgress >= this.workNeeded) {
            return true; 
        }
        return false;
    }
} 

function newBuilding(name) {
    let resourceElements = document.getElementById('resources').getElementsByTagName('span');
    
    let woodNeeded = 0, stoneNeeded = 0, ironNeeded = 0;

    Array.from(resourceElements).forEach((span) => {
        let resourceText = span.textContent.trim();
        
        let [quantity, resource] = resourceText.split(' ');

        quantity = parseInt(quantity, 10);

        if (resource === 'wood') {
            woodNeeded = quantity;
        } else if (resource === 'stone') {
            stoneNeeded = quantity;
        } else if (resource === 'iron') {
            ironNeeded = quantity;
        }
    });

    if (wood < woodNeeded || stone < stoneNeeded || iron < ironNeeded) {
        return;
    } else if(typeof currentBuilding !== 'object'){
        wood -= woodNeeded;
        stone -= stoneNeeded;
        iron -= ironNeeded;

        let workNeeded = parseInt(document.getElementById("work").innerText.split(" ")[0], 10);

        currentBuilding = new building(name, workNeeded);
    }else{
        alert('finish current building first')
    }
}



   

             

for(let i of document.getElementsByClassName('constructionButton')){
    i.addEventListener('click', function(event){
        newBuilding(event.target.innerText)
    })
}






const tooltip = document.getElementById('tooltip');
        const triggers = document.querySelectorAll('.tooltip-trigger');

        function updateTooltipPosition(event) {
            const cursorXPercent = (event.clientX / window.innerWidth) * 100;
            const cursorYPercent = (event.clientY / window.innerHeight) * 100;
        
            let tooltipXPercent = cursorXPercent - (tooltip.offsetWidth / window.innerWidth) * 50; // Center horizontally
            let tooltipYPercent = cursorYPercent + .5;
        
            if (cursorYPercent > 50) {
                tooltipYPercent = cursorYPercent - .5 - (tooltip.offsetHeight / window.innerHeight) * 100; // Position above
            }
        
            tooltip.style.left = tooltipXPercent + '%';
            tooltip.style.top = tooltipYPercent + '%';

           

        }
        

  
        triggers.forEach(trigger => {
            trigger.addEventListener('mouseover', (event) => {
                
                const dataValue = event.target.getAttribute('data-value');
                
                tooltip.innerHTML = dataValue;
                
                

                updateTooltipData()

                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
                updateTooltipPosition(event);
            });

            trigger.addEventListener('mousemove', updateTooltipPosition);

            trigger.addEventListener('mouseleave', () => {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            });
        });

function updateTooltipData(){
    if(document.getElementById("resources")){
        let div = document.getElementById("resources")
        let text = div.innerHTML.split('<br>')
        let resourceReq = text.map(row => {
            let [quantity, resource] = row.trim().split(' ');
            return { quantity: parseInt(quantity, 10), resource: resource.trim()};
        })
        resourceReq.forEach((req,index)=>{
            if((req.resource === 'wood' && wood >=req.quantity)||
            (req.resource === 'stone' && stone >=req.quantity)||
            (req.resource === 'iron' && iron >=req.quantity)){
                text[index] = `<span class="sufficient">${text[index]}</span>`
            }else{
                text[index] = `<span class="insufficient">${text[index]}</span>`
            }
        }) 
        div.innerHTML = text.join('<br>');
    }else if(document.getElementById('moodBuff')){
        let div = document.getElementById('moodBuff')
        div.innerHTML = ''
        if(typeof personObj !== 'string'){

            for(let i of personObj.moraleBreakDown){
                let newMood = document.createElement('div')
                newMood.innerText = `${i.name} | ${i.amount}`
                if(i.amount>0){
                    newMood.style.color = 'green'
                } else{
                    newMood.style.color = 'red'
    
                }
                div.appendChild(newMood)
    
            }
        }
        
    
    }else if(document.getElementById('healthBuff')){
        let div = document.getElementById('healthBuff')
        div.innerHTML = ''
        if(typeof personObj !== 'string'){
            let newHealth = document.createElement('div')
                newHealth.innerText = `Growing Old | ${Math.floor(healthDecayAge(personObj.age))}`
                
                newHealth.style.color = 'red'

                div.appendChild(newHealth)
            for(let i of personObj.healthBreakDown){
                let newHealth = document.createElement('div')
                newHealth.innerText = `${i.name} | ${healthDecayPlagueWounded(i)}`
                
                newHealth.style.color = 'red'

                div.appendChild(newHealth)
    
            }
        }
    }else if(document.getElementById('power')){
        
    }
}




        function selectPerson(personDiv,event){
let chosenPersonId = personDiv.id
personObj = searchPerson(everyone, "name", chosenPersonId)
changeToPerson(personObj)





        }

        function searchPerson(array, name, chosenPersonId){
           return array.find(obj =>obj[name]===chosenPersonId)
        }





       

        function changeToPerson(personObj) {

            for(let i of document.getElementsByClassName("mainMenu")){
                i.style.display = "none"
            }
            for(let j of document.getElementsByClassName("footerTab")){
                j.classList.remove("selected")
            }
            document.getElementById("personMenu").style.display = "grid"
                    
            document.getElementById("healthData").innerText = `Health: ${personObj.health}`;
            document.getElementById("moraleData").innerText = `Morale: ${personObj.morale}`;
            document.getElementById("ageData").innerText = `Age: ${personObj.age}`;
            document.getElementById("genderData").innerText = `Gender: ${personObj.gender}`;
            document.getElementById("employmentData").innerText = `Job: ${capitalizeWords(personObj.employment)}`;
        
           
            determineUrgentNotes(personObj)

        
            document.getElementById("urgentNotesTitle").innerText = `${personObj.name} - Urgent Notes`;
        
                
                
                for (let button of document.getElementsByClassName("jobSelectButton")) {
                    button.removeEventListener("click", jobSelectHandler);
                
                    button.personObj = personObj; 
                    button.addEventListener("click", jobSelectHandler);
                }
                function jobSelectHandler(event) {
                    const personObj = this.personObj; 
                    jobSelect(personObj, event);
                }

            }
        
        function determineUrgentNotes(personObj){

            if(typeof personObj === "object"){
            
                let numberUrgent = 0;
                
                    if(personObj.healthBreakDown.some(e => e.type === 'plague')){
                        document.getElementById("sickUrgent").style.display = "flex";
                    numberUrgent++
                    }else{
                        document.getElementById("sickUrgent").style.display = "none";

                    }
                    if(personObj.healthBreakDown.some(e => e.type === 'wound')){
                        document.getElementById("woundedUrgent").style.display = "flex";
                    numberUrgent++
                    }else{
                        document.getElementById("woundedUrgent").style.display = "none";

                    }                
                
                
                
                
                
                if (personObj.starving === true) {
                    document.getElementById("starvingUrgent").style.display = "flex";
                    numberUrgent++
    
                } else {
                    document.getElementById("starvingUrgent").style.display = "none";
                }
                
                if (personObj.employment === "unemployed") {
                    document.getElementById("unemployedUrgent").style.display = "flex";
                    numberUrgent++
    
                } else {
                    document.getElementById("unemployedUrgent").style.display = "none";
    
                }
                
                if (personObj.residence === "homeless") {
                    document.getElementById("homelessUrgent").style.display = "flex";
                    numberUrgent++
    
                } else {
                    document.getElementById("homelessUrgent").style.display = "none";
                }
                return numberUrgent;
            }
            
        }



        
        let clickCooldown = false;

        function jobSelect(personObj, event) {
            if (clickCooldown) return;
        
            clickCooldown = true;
            setTimeout(() => (clickCooldown = false), 100);
                switch (event.target.id) {
                    case "woodcutter":
                        if (jobCounts.woodcutter < woodcutterMax && personObj.employment !== "Woodcutter") {
                            personObj.employment = "woodcutter";
                        }
                        break;
                    case "blacksmith":
                        if (jobCounts.blacksmith < blacksmithMax && personObj.employment !== "Blacksmith") {
                            personObj.employment = "blacksmith";
                        }
                        break;
                    
                    case "brewer":
                        if (jobCounts.brewer < brewerMax && personObj.employment !== "Brewer") {
                            personObj.employment = "brewer";
                        }
                        break;
                    case "cook":
                        if (jobCounts.cook < cookMax && personObj.employment !== "Cook") {
                            personObj.employment = "cook";
                        }
                        break;
                    case "farmer":
                        if (jobCounts.farmer < farmerMax && personObj.employment !== "Farmer") {
                            personObj.employment = "farmer";
                        }
                        break;
                    case "hunter":
                        if (jobCounts.hunter < hunterMax && personObj.employment !== "Hunter") {
                            personObj.employment = "hunter";
                        }
                        break;
                    case "miner":
                        if (jobCounts.miner < minerMax && personObj.employment !== "Miner") {
                            personObj.employment = "miner";
                        }
                        break;
                    case "quarrier":
                        if (jobCounts.quarrier < quarrierMax && personObj.employment !== "Quarrier") {
                            personObj.employment = "quarrier";
                        }
                        break;
                    case "constable":
                        if (jobCounts.constable < constableMax && personObj.employment !== "Constable") {
                            personObj.employment = "constable";
                        }
                        break;
                    case "soldier":
                        if (jobCounts.soldier < soldierMax && personObj.employment !== "Soldier"&&weapons>0) {
                            personObj.employment = "soldier";
                            weapons--
                        }
                        break;
                    case "actor":
                        if (jobCounts.actor < actorMax && personObj.employment !== "Actor") {
                            personObj.employment = "actor";
                        }
                        break;
                    case "doctor":
                        if (jobCounts.doctor < doctorMax && personObj.employment !== "Doctor") {
                            personObj.employment = "doctor";
                        }
                        break;
                    case "barkeep":
                        if (jobCounts.barkeep < barkeepMax && personObj.employment !== "Barkeep") {
                            personObj.employment = "barkeep";
                        }
                        break;
                        case "carpenter":
                            if (personObj.employment !== "Carpenter") {
                                personObj.employment = "carpenter";


                            }
                            break;
                    default:
                        console.log("Invalid job ID or no action required.");
                        break;
                }
                jobCounts.actor = findEmployees('actor')
                jobCounts.woodcutter = findEmployees('woodcutter')
                jobCounts.barkeep = findEmployees('barkeep')
                jobCounts.doctor = findEmployees('doctor')
                jobCounts.soldier = findEmployees('soldier')
                jobCounts.constable = findEmployees('constable')
                jobCounts.miner = findEmployees('miner')
                jobCounts.quarrier = findEmployees('quarrier')
                jobCounts.farmer = findEmployees('farmer')
                jobCounts.hunter = findEmployees('hunter')
                jobCounts.cook = findEmployees('cook')
                jobCounts.brewer = findEmployees('brewer')
                jobCounts.carpenter = findEmployees('carpenter')

                jobCounts.blacksmith = findEmployees('blacksmith')



                changeToPerson(personObj); 


            }

            
            function findEmployees(type){
                let count = 0
                for(let i of citizens){
                    if(i.employment == type){
                        count++

                    }

                }
                return count
            }


            
            function changeResidence(residence){


            switch(residence){
                case 'hovel': if(hovelSpace !== hovelResidents){
                    personObj.residence = residence

                } break;
                case 'longhouse': if(longhouseSpace !== longhouseResidents){
                    personObj.residence = residence

                }break;
                case 'cottage': if(cottageSpace !== cottageResidents){
                    personObj.residence = residence

                }break;
                case 'townhouse': if(townhouseSpace !== townhouseResidents){
                    personObj.residence = residence

                }break;
                case 'manor': if(manorSpace !== manorResidents){
                    personObj.residence = residence

                }break;
                default: personObj.residence = residence

            }
            console.log(personObj.residence)

        

            hovelResidents = findResidents('hovel')
            longhouseResidents = findResidents('longhouse')
            cottageResidents = findResidents('cottage')
            townhouseResidents = findResidents('townhouse')
            manorResidents = findResidents('manor')
            homelessResidents = findResidents('homeless')

         






            }

            function findResidents(type){
                let count = 0
                for(let i of citizens){
                    if(i.residence == type){
                        count++

                    }

                }
                return count
            }
function switchToPersonOptionDivButtons(id){
    for(let i of document.getElementsByClassName("personOptionsDivButtons")){
        i.classList.add("inactive")
    }
document.getElementById(id).classList.remove("inactive")
}




function switchToConstruction(){
for(let i of document.getElementsByClassName("mainMenu")){
    i.style.display = "none"
}
for(let j of document.getElementsByClassName("footerTab")){
    j.classList.remove("selected")
}
document.getElementById("construction").style.display = "grid"
document.getElementById("tab1").classList.add("selected")

}




function switchToJustice(){
    for(let i of document.getElementsByClassName("mainMenu")){
        i.style.display = "none"
    }
    for(let j of document.getElementsByClassName("footerTab")){
        j.classList.remove("selected")
    }
    document.getElementById("justiceMilitary").style.display = "grid"
    document.getElementById("tab2").classList.add("selected")
}

function switchToLegislature(){
    for(let i of document.getElementsByClassName("mainMenu")){
        i.style.display = "none"
    }
    for(let j of document.getElementsByClassName("footerTab")){
        j.classList.remove("selected")
    }
    document.getElementById("legislature").style.display = "grid"
    document.getElementById("tab3").classList.add("selected")
    
}










function capitalizeWords(input) {
    if (!input) return ''; 
 
    return input.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
        .join(' '); 
}




let gameSpeed = 0
 let dailyChange;
updateInformation()
document.addEventListener("keydown", function(event){
    if(event.code === 'Space'){
        event.preventDefault()
        if(gameSpeed ===0){
             dailyChange = setInterval(updateDailyData, 1000)
             gameSpeed++
             document.getElementById("playPause").innerText = ">"
        } else{
            clearInterval(dailyChange)
            gameSpeed --
            document.getElementById("playPause").innerText = "||"
        }
    }
})


function updateInformation(){

if(citizens.length === 0){
    addEventLog('GAME OVER')
}



    for(let person of everyone){
        let numberUrgent = determineUrgentNotes(person)
        if(numberUrgent==1){
            document.getElementById(person.name).style.border = "2px solid rgb(140, 115, 0)"
        }else if(numberUrgent==2){
            document.getElementById(person.name).style.border = "2px solid rgb(191, 84, 2)"

        }else if(numberUrgent ==3){
            document.getElementById(person.name).style.border = "2px solid rgb(128, 21, 0)"

        }else if(numberUrgent >=4){
            document.getElementById(person.name).style.border = "2px solid rgb(64, 9, 1)"

        }else{
            document.getElementById(person.name).style.border = "none"

        }
        
    }
    determineUrgentNotes(personObj)
    jobCounts.actor = findEmployees('actor')
    jobCounts.woodcutter = findEmployees('woodcutter')
    jobCounts.barkeep = findEmployees('barkeep')
    jobCounts.doctor = findEmployees('doctor')
    jobCounts.soldier = findEmployees('soldier')
    jobCounts.constable = findEmployees('constable')
    jobCounts.miner = findEmployees('miner')
    jobCounts.quarrier = findEmployees('quarrier')
    jobCounts.farmer = findEmployees('farmer')
    jobCounts.hunter = findEmployees('hunter')
    jobCounts.cook = findEmployees('cook')
    jobCounts.brewer = findEmployees('brewer')
    jobCounts.carpenter = findEmployees('carpenter')

    jobCounts.blacksmith = findEmployees('blacksmith')


    woodDaily = jobCounts.woodcutter * 3;
    ironDaily = jobCounts.miner * 1;
    cropsDaily = jobCounts.farmer * 80
    mealsDaily = jobCounts.cook * 40  - everyone.length * 3;
    aleDaily = jobCounts.brewer * 10;
    stoneDaily = jobCounts.quarrier * 2;
    weaponsDaily = jobCounts.blacksmith * 1;
    goldDaily = taxRate * citizens.length 

     let woodConsumed = jobCounts.blacksmith * 2; 
    let cropsConsumed = jobCounts.brewer * 400 + jobCounts.cook * 200;
    let aleConsumed = jobCounts.barkeep*30
    let goldConsumed= mercenaryCost

    

     woodDaily = woodDaily - woodConsumed;
     cropsDaily = cropsDaily - cropsConsumed;
     aleDaily = aleDaily-aleConsumed;
     goldDaily = goldDaily-goldConsumed

   

    wood = updateResource("wood", woodDaily, wood, woodMax, true);
    stone = updateResource("stone", stoneDaily, stone, stoneMax,true);
    iron = updateResource("iron", ironDaily, iron, ironMax,true);
    gold = updateResource("gold", goldDaily, gold, goldMax, true);
    crops = updateResource("crops", cropsDaily, crops, cropsMax,true);
    ale = updateResource("ale", aleDaily, ale, aleMax,true);
    weapons = updateResource("weapons", weaponsDaily, weapons, weaponsMax,true);
    meals = updateResource("meals", mealsDaily, meals, mealsMax,true);
    
    


    updateJobAndResidence('soldier', jobCounts.soldier, soldierMax);

    updateJobAndResidence('actor', jobCounts.actor, actorMax);
    updateJobAndResidence('doctor', jobCounts.doctor, doctorMax);
    updateJobAndResidence('barkeep', jobCounts.barkeep, barkeepMax);
    updateJobAndResidence('blacksmith', jobCounts.blacksmith, blacksmithMax);
    updateJobAndResidence('brewer', jobCounts.brewer, brewerMax);
    updateJobAndResidence('cook', jobCounts.cook, cookMax);
    updateJobAndResidence('farmer', jobCounts.farmer, farmerMax);
    updateJobAndResidence('hunter', jobCounts.hunter, hunterMax);
    updateJobAndResidence('woodcutter', jobCounts.woodcutter, woodcutterMax);
    updateJobAndResidence('miner', jobCounts.miner, minerMax);
    updateJobAndResidence('quarrier', jobCounts.quarrier, quarrierMax);
    updateJobAndResidence('constable', jobCounts.constable, constableMax);
    updateJobAndResidenceForInfinity('carpenter', jobCounts.carpenter);

    updateJobAndResidenceForInfinity('homeless', homelessResidents);

    hovelResidents = findResidents('hovel')
    longhouseResidents = findResidents('longhouse')
    cottageResidents = findResidents('cottage')
    townhouseResidents = findResidents('townhouse')
    manorResidents = findResidents('manor')
    homelessResidents = findResidents('homeless')

    updateJobAndResidence('hovel', hovelResidents, hovelSpace);
    updateJobAndResidence('longhouse', longhouseResidents, longhouseSpace);
    updateJobAndResidence('cottage', cottageResidents, cottageSpace);
    updateJobAndResidence('townhouse', townhouseResidents, townhouseSpace);
    updateJobAndResidence('manor', manorResidents, manorSpace);
  

    if(typeof currentBuilding === "object"){
    document.getElementById('constructionProgress').innerText  = `${currentBuilding.name} - ${(( currentBuilding.workProgress/currentBuilding.workNeeded) *100).toFixed(2)}% complete - ${ Math.ceil((currentBuilding.workNeeded - currentBuilding.workProgress)/(jobCounts.carpenter + .5*prisoners.length))} Days left`
    }else{
        document.getElementById('constructionProgress').innerText  = `Nothing being constructed`
    
    }

    
    function updateJobAndResidence(type, count, max) {
        const element = document.getElementById(type);
        element.innerText = `${type.charAt(0).toUpperCase() + type.slice(1)} ${count}/${max}`;
        if(count == max){
            element.style.color = "rgb(220, 161, 0)"
        }else{
            element.style.color ="rgb(184, 184, 184)"
        }
    }

    function updateJobAndResidenceForInfinity(type, count) {
        const element = document.getElementById(type);
        element.innerText = `${type.charAt(0).toUpperCase() + type.slice(1)} ${count}/∞`;
    }

   
    for(let i of everyone){
        i.moodCheckTaxes()
        i.moodCheckHealth()

        i.moodCheckResidence()
        i.updateMorale(true)
    }
    for(let i of everyone){
        i.updateHealth(true)
    }
    
updateTooltipData()
         

}

function updateDailyData() {
    day++
    document.getElementById('timeData').innerText = day

if(day%365 === 0){
    for(let i of everyone){
        i.age++
    }
}
 
updateConstruction()
updateFood()
updateResources()
addRandomEvent()
checkPrisonBreak()
updateHealth()
plagueSpread()

updateMorale()


updateInformation()
}

for(let i of everyone){
    i.moodCheckHealth()

    i.moodCheckTaxes()
    i.moodCheckResidence()
    i.updateMorale(true)
}
function updateFood(){
    for(let i of everyone){
        i.eatfood()
    }
}
function updateHealth(){

    for(let i of everyone){
        i.updateHealth(false)
    }
    if(typeof personObj === "object" && document.getElementById('personMenu').style.display !== "none"){
 changeToPerson(personObj)
    }
}

function updateMorale(){

    for(let i of everyone){
        i.moodCheckTaxes()
        i.moodCheckHealth()

        i.moodCheckResidence()
        i.updateMorale(false)
    }
    if(typeof personObj === "object" && document.getElementById('personMenu').style.display !== "none"){
 changeToPerson(personObj)
    }
}

function updateConstruction(){


if(typeof currentBuilding === "object"){
    let finished = currentBuilding.progress();
    if(finished){
addEventLog(`${currentBuilding.name} was completed`)
        switch(currentBuilding.name){
            case 'Hovel': hovelSpace += 3;
            break;
            case 'Longhouse': longhouseSpace += 5;
            break;
            case 'Cottage': cottageSpace += 3;
            break;
            case 'Townhouse': townhouseSpace += 6;
            break;
            case 'Manor': townhouseSpace += 2;
            break;

            case 'Granary': cropsMax += 1500;
            break;
            case 'Shed': woodMax+=100, stoneMax+=80, ironMax+=40, weaponsMax+=5;
            break;
            case 'Cold Room': mealsMax+=400, aleMax+=30
            break;
            case 'Bank': goldMax+=300
            break;

            case 'Lumber Hut': woodcutterMax+=2
            break;
            case 'Quarry': quarrierMax+=2
            break;
            case 'Iron Mine': minerMax +=1
            break;
            case 'Blacksmith': blacksmithMax+=1
            break;
            
            case 'Farm': farmerMax+=2
            break;
            case 'Kitchen': cookMax+=1
            break;
            case 'Brewery': brewerMax+=1
            break;


            case 'Guardhouse': constableMax+=4
            break;
            case 'Barracks':soldierMax+=4
            break;
            case 'Prison':maxPrisoners+=8

            case 'Infirmary': doctorMax+=2
            break;








        }



        currentBuilding = "none"
    }


document.getElementById('constructionProgress').innerText  = `${currentBuilding.name} - ${(( currentBuilding.workProgress/currentBuilding.workNeeded) *100).toFixed(2)}% complete - ${ Math.ceil((currentBuilding.workNeeded - currentBuilding.workProgress)/jobCounts.carpenter)} Days left`
}else{
    document.getElementById('constructionProgress').innerText  = `Nothing being constructed`

}
    
}

function updateResources(){

     woodDaily = jobCounts.woodcutter * 3;
     ironDaily = jobCounts.miner * 1;
     cropsDaily = jobCounts.farmer * 40;
     mealsDaily = jobCounts.cook * 40;
     aleDaily = jobCounts.brewer * 10;
     stoneDaily = jobCounts.quarrier * 2;
     weaponsDaily = jobCounts.blacksmith * 1;
     goldDaily = taxRate * citizens.length
    
     let woodConsumed = jobCounts.blacksmith * 2; 
     let cropsConsumed = jobCounts.brewer * 400 + jobCounts.cook * 200;
     let aleConsumed = jobCounts.barkeep*30
     let goldConsumed= mercenaryCost
 
     
 
      woodDaily = woodDaily - woodConsumed;
      cropsDaily = cropsDaily - cropsConsumed;
      aleDaily = aleDaily-aleConsumed;
      goldDaily = goldDaily-goldConsumed

   

    wood = updateResource("wood", woodDaily, wood, woodMax, false);
    stone = updateResource("stone", stoneDaily, stone, stoneMax,false);
    iron = updateResource("iron", ironDaily, iron, ironMax,false);
    gold = updateResource("gold", goldDaily, gold, goldMax, false);
    crops = updateResource("crops", cropsDaily, crops, cropsMax,false);
    ale = updateResource("ale", aleDaily, ale, aleMax,false);
    weapons = updateResource("weapons", weaponsDaily, weapons, weaponsMax,false);
    meals = updateResource("meals", mealsDaily, meals, mealsMax,false);

    if(ale>0 && jobCounts.barkeep>0){
        for(let i of everyone){
            i.addMoraleEffect("Supplied Taverns",5*jobCounts.barkeep,1,'tavern')
        }
    }

   
}





function updateResource(resourceName, dailyAmount, currentAmount, maxAmount, skip) {
    if(skip === false){
        currentAmount += dailyAmount;
    }
    if (currentAmount >= maxAmount) {
        currentAmount = maxAmount;
        document.getElementById(`${resourceName}Max`).style.color = "rgb(220, 161, 0)";
    } else {
        document.getElementById(`${resourceName}Max`).style.color = "rgb(184, 184, 184)";
    }

    const dailyElement = document.getElementById(`${resourceName}Daily`);
    dailyElement.style.color = dailyAmount < 0 ? "red" : "rgb(184, 184, 184)";
    dailyElement.innerText = `${dailyAmount} / day`;

    document.getElementById(`${resourceName}Max`).innerText = `${currentAmount}/${maxAmount}`;
currentAmount = Math.max(0,currentAmount)
    return currentAmount;
}

function addEventLog(message) {
    let logContainer = document.getElementById("eventLogContainer");

    let newLog = document.createElement("div");
    newLog.className = "eventLogitem";
    newLog.innerHTML = `${message} - Day ${day}`;

    logContainer.appendChild(newLog);

    while (logContainer.children.length > 8) {
        logContainer.removeChild(logContainer.firstChild);
    }
}




function addRandomEvent(){
    const rand = Math.floor(Math.random() * 300); 

    if (rand < 10 || rand < 5 || rand < 3 || rand < 1) {
        if (rand <1) {

        } else if (rand < 3) {

        } else if (rand < 5) {

        } else if (rand < 10) {

        }
    }
}









function checkPrisonBreak() {
    if (prisoners.length === 0) return; 

    let prisonerCount = prisoners.length;
    let constableCount = jobCounts.constable;

    let baseChance = (prisonerCount - constableCount * 2) / prisonerCount;

  
    let prisonBreakChance = Math.max(0, Math.min(baseChance, 0.5));

    if (Math.random() < prisonBreakChance) {
        triggerPrisonBreak(prisonBreakChance);
    }
}

function triggerPrisonBreak(prisonBreakChance){
    let deaths;
    
    let prisonerCount = prisoners.length;

    if (prisonerCount < 2) {
        deaths = 1;
    } else if (prisonerCount >= 2 && prisonerCount < 5) {
        deaths = 3;
    } else if (prisonerCount >= 5 && prisonerCount < 10) {
        deaths = 5;
    } else if (prisonerCount >= 10) {
        deaths = 8;
    }

    deaths = Math.min(deaths, citizens.length); 
    for (let i = 0; i < deaths; i++) {
        killPerson(citizens[Math.floor(Math.random() * citizens.length)]);
    }

    let escapees = Math.floor(prisonerCount * 2 * prisonBreakChance);
    escapees = Math.min(escapees, prisoners.length); 
    for (let i = 0; i < escapees; i++) {
        let prisoner = prisoners[0];
        killPerson(prisoner)
    }

    addEventLog(`${escapees} prisoners have escaped! ${deaths} citizens were killed!`, "warning");
}


function changeImprisonment(person){
    if(jobCounts.constable >=0){
        if(person.employment !== "imprisoned"){
            person.employment = "imprisoned"
            person.residence = "imprisoned"
            let index = citizens.findIndex(e => e.name === person.name)
            citizens.splice(index,1)
    
            prisoners.push(person)
    
            
    
    
    
    
    
    
        }else{
     person.employment = "unemployed"
            person.residence = "homeless"
            let index = prisoners.findIndex(e => e.name === person.name)
            prisoners.splice(index,1)
    
            citizens.push(person)
        }
    }
 
}



function performExecution(){
    
    if(prisoners.findIndex(e => e.name === personObj.name) !== - 1){
        let rand = Math.random()
        let moraleAmount = 0
        let moraleName = ''
        if(rand<0.10){
            moraleAmount = 10
         moraleName = 'Spectacular'

        }else if(rand<0.60){
         moraleAmount = 5
         moraleName = 'Satisfying'

        }else if(rand<.85){
            moraleAmount = 1
            moraleName = 'Pleasant'

        }else if(rand<.98){
            moraleAmount = -5
            moraleName = 'Boring'

        }else{
            moraleAmount = -10
            moraleName = 'Terrible'

        }
        addEventLog(`Prisoner ${personObj.name} was killed in a ${moraleName} execution`)
        moraleName = `${moraleName} public execution`
        for(let i of citizens){
            i.addMoraleEffect(new moraleType(moraleName,moraleAmount,20,'execution'))
        }

    }else{
        let rand = Math.random()
        let moraleAmount = 0
        let moraleName = ''
        if(rand<0.05){
            moraleAmount = 10
         moraleName = 'Spectacular'

        }else if(rand<0.25){
         moraleAmount = 5
         moraleName = 'Satisfying'

        }else if(rand<.4){
            moraleAmount = 1
            moraleName = 'Pleasant'

        }else if(rand<.8){
            moraleAmount = -5
            moraleName = 'Boring'

        }else{
            moraleAmount = -10
            moraleName = 'Terrible'

        }
        addEventLog(`Citizen ${personObj.name} was killed in a ${moraleName} execution`)
        moraleName = `${moraleName} public execution`
        for(let i of citizens){
            i.addMoraleEffect(new moraleType(moraleName,moraleAmount,20, 'execution'))
        }

    }
killPerson(personObj)
switchToConstruction()
}





const taxButton = document.getElementById("taxes");

taxButton.addEventListener("click", function (event) {
    taxRate = (taxRate + 1) % 11; 
    updateTaxDisplay();
});

taxButton.addEventListener("contextmenu", function (event) {
    event.preventDefault(); 
    if (taxRate > 0) {
        taxRate -= 1; 
    }
    updateTaxDisplay();
});
updateTaxDisplay()
function updateTaxDisplay() {
    taxButton.textContent = `Tax/Capita: ${taxRate}`;
}



rerollCompanies() 
for(let i of document.getElementsByClassName('mercenaryButton')){
    i.addEventListener('contextmenu',function(event){
        forfeitContract(event.target.id)
    })
}
function rerollCompanies() {
    const companies = Array.from(document.querySelectorAll('.mercenaryButton')); 
    const unselectedCompanies = companies.filter(company => !company.classList.contains('selected'));

    unselectedCompanies.forEach(company => {
        let power = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        let cost = (Math.random() * (1.2 - 0.7) + 0.7).toFixed(1) * power;

        const powerElement = company.querySelector('.power');
        const costElement = company.querySelector('.cost');

        if (powerElement && costElement) {
            powerElement.innerText = `Power: ${power}`; 
            costElement.innerText = `Cost: ${cost}`; 
        }

        

        company.setAttribute('data-value', `${company.textContent.trim()}<hr> <div id='cost'> Daily Cost: ${Math.round(cost)}</div><hr><div id='upCost'> Upfront Cost: ${Math.round(cost)*40}</div><hr><div id='power'> Soldiers: ${power}</div>`);
        company.setAttribute('data-cost',Math.round(cost))
        company.setAttribute('data-power',power)
        company.setAttribute('data-upCost',Math.round(cost)*40)
        if(gold<Math.round(cost)*40){
            company.setAttribute('data-value', `${company.textContent.trim()}<hr> <div id='cost'> Daily Cost: ${Math.round(cost)}</div><hr><div id='upCost' class='insufficient'> Upfront Cost: ${Math.round(cost)*40}</div><hr><div id='power'> Soldiers: ${power}</div>`);

        }

    });
}

function acceptContract(company){
    let upCost= parseInt(element.getAttribute('data-upCost'))

if(gold>upCost){
    let element= document.getElementById(company)
    if(!element.classList.contains('selected')){
     element.classList.add('selected')
     let power= parseInt(element.getAttribute('data-power'))
     let cost= parseInt(element.getAttribute('data-cost'))
 gold-=upCost
     mercenaryCost+=cost
     mercenaryPower+=power
     console.log(power)
 
     element.setAttribute('data-value', `${element.textContent}<hr> <div id='cost'> Daily Cost: ${Math.round(cost)}</div><hr><div id='upCost' >Selected</div><hr><div id='power'> Soldiers: ${power}</div>`);
 
 
    }
}
   


}

function forfeitContract(company){
    let element= document.getElementById(company)
    if(element.classList.contains('selected')){
     element.classList.remove('selected')
     let power= parseInt(element.getAttribute('data-power'))
     let cost= parseInt(element.getAttribute('data-cost'))
     mercenaryCost-=cost
     mercenaryPower-=power
     if(gold<Math.round(cost)*15){
        element.setAttribute('data-value', `${element.textContent.trim()}<hr> <div id='cost'> Daily Cost: ${Math.round(cost)}</div><hr><div id='upCost' class='insufficient'> Upfront Cost: ${Math.round(cost)*15}</div><hr><div id='power'> Soldiers: ${power}</div>`);

    }else{
        element.setAttribute('data-value', `${element.textContent.trim()}<hr> <div id='cost'> Daily Cost: ${Math.round(cost)}</div><hr><div id='upCost'> Upfront Cost: ${Math.round(cost)*15}</div><hr><div id='power'> Soldiers: ${power}</div>`);

    }
    }
}




function calculateProbability(N_A, N_B, k) {
    const strength_A = Math.pow(N_A, k);
    const strength_B = Math.pow(N_B, k);
    const probability_A = strength_A / (strength_A + strength_B);
    return probability_A;
}

function calculateCasualties(N_A, N_B, k) {
    // Step 1: Calculate probability of Side A winning
    const probability_A = calculateProbability(N_A, N_B, k);


    // Step 2: Determine the winning and losing sides
    let winningSide;
    let winningUnits;
    let losingUnits;
    let winningProbability;
    
    if (probability_A > Math.random()) {
        winningSide = 'A'; // Side A is the winning side
        winningUnits = N_A; // Winning side units = Side A units
        losingUnits = N_B; // Losing side units = Side B units
        winningProbability = probability_A; // Winning probability = Side A's probability
    } else {
        winningSide = 'B'; // Side B is the winning side
        winningUnits = N_B; // Winning side units = Side B units
        losingUnits = N_A; // Losing side units = Side A units
        winningProbability = 1-probability_A; // Winning probability = Side B's probability
    }
    // Step 3: Calculate casualties for the winning side
    const winningCasualties = winningUnits * (1 - winningProbability);
    const winningDeaths = (4 * winningCasualties) / 5;
    const winningWounded = winningCasualties / 5;

    // Step 4: Calculate casualties for the losing side
    const losingCasualties = losingUnits;
    const losingDeaths = (6 * losingCasualties) / 7;
    const losingWounded = losingCasualties / 7;
    
    // Step 5: Return results
    return {
        winningSide,
        winningDeaths: Math.round(winningDeaths),
        winningWounded: Math.round(winningWounded),
        losingDeaths: Math.round(losingDeaths),
        losingWounded: Math.round(losingWounded),
    };
}


function attack(faction,unitBonus,resourceBonus,goldBonus,foodBonus){
let enemyUnits;
let resourceReward;
let goldReward;
let foodReward;

if(faction==='pendriatic'){

    enemyUnits = Math.floor(Math.random() * (12 - 3 + 1)) + 3 * unitBonus
    resourceReward = Math.floor(Math.random() * (100 - 50 + 1)) + 50 * resourceBonus
    goldReward = Math.floor(Math.random() * (30 - 5 + 1)) + 5 * goldBonus
    foodReward = Math.floor(Math.random() * (50 - 30 + 1)) + 30 * foodBonus
    let totalUnits = shuffleArray(getTotalUnits())
    console.log(enemyUnits)
    let results = calculateCasualties(mercenaryPower+jobCounts.soldier,enemyUnits,2)
    displayBattleResults(results,totalUnits,resourceReward,goldReward,foodReward,'wood')
}else if(faction==='bromund'){
    enemyUnits = Math.floor(Math.random() * (12 - 3 + 1)) + 5* unitBonus
    resourceReward = Math.floor(Math.random() * (110 - 60 + 1)) + 60 * resourceBonus
    goldReward = Math.floor(Math.random() * (30 - 8 + 1)) + 8 * goldBonus
    foodReward = Math.floor(Math.random() * (60 - 40 + 1)) + 40 * foodBonus
    let totalUnits = shuffleArray(getTotalUnits())
    console.log(enemyUnits)
    let results = calculateCasualties(mercenaryPower+jobCounts.soldier,enemyUnits,2)
    displayBattleResults(results,totalUnits,resourceReward,goldReward,foodReward,'stone')

}else if(faction==='calradia'){
    enemyUnits = Math.floor(Math.random() * (12 - 3 + 1)) + 8* unitBonus
    resourceReward = Math.floor(Math.random() * (120 - 70 + 1)) + 70* resourceBonus
    goldReward = Math.floor(Math.random() * (30 - 12 + 1)) + 12 * goldBonus
    foodReward = Math.floor(Math.random() * (70 - 50 + 1)) + 50 * foodBonus
    let totalUnits = shuffleArray(getTotalUnits())
    console.log(enemyUnits)
    let results = calculateCasualties(mercenaryPower+jobCounts.soldier,enemyUnits,2)
    displayBattleResults(results,totalUnits,resourceReward,goldReward,foodReward,'iron')
}



}




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

function getTotalUnits(){
    let totalUnits=[]
    for(let i of citizens){
        if(i.employment.toLowerCase() ==="soldier"){
            totalUnits.push(i)
        }
    }
    for(let j = 0; j<mercenaryPower;j++){

        totalUnits.push('mercenary')

    }
    return totalUnits;
}

function displayBattleResults(results,totalUnits,resourceReward,goldReward,foodReward,resourceType){
    if(results.winningSide == 'B'){
        addEventLog(`We have lost the battle. We have lost ${results.losingDeaths} soldiers and ${results.losingWounded} have been wounded`)
        for(let i = 0; i< results.losingDeaths;i++){
            console.log(totalUnits)

            if(totalUnits[i]!=='mercenary'){
                killPerson(totalUnits[i])
            }else{
                mercenaryPower--
            }
        }


        for(let j = 0; j<results.winningWounded;j++){
            if(!totalUnits[j]=='mercenary'){
    let rand = Math.floor(Math.random() * 4) + 1;

    if(rand ===1){
    i.addHealthEffect(new healthType('Minor Wound',1,'wound'))
}else if(rand===2){
    i.addHealthEffect(new healthType('Moderate Wound',3,'wound'))

}else if(rand===3){
    i.addHealthEffect(new healthType('Severe Wound',5,'wound'))

}else if(rand===4){
    i.addHealthEffect(new healthType('Extreme Wound',10,'wound'))

}
                
            }


        }


        
    }else if(results.winningSide == 'A'){
        addEventLog(`We have won the battle. We have lost ${results.winningDeaths} soldiers and ${results.winningWounded} have been wounded. We have captured ${results.losingWounded} prisoners. We plundered ${resourceReward} ${resourceType},${goldReward} gold, and ${foodReward} meals`)
        for(let i = 0; i< results.winningDeaths;i++){
            console.log(totalUnits)
            if(totalUnits[i]!=='mercenary'){
                console.log(i)

                killPerson(totalUnits[i])
            }else{
                mercenaryPower--
            }
        }

        for(let j = 0; j<results.winningWounded;j++){
            if(!totalUnits[j]=='mercenary'){
    let rand = Math.floor(Math.random() * 4) + 1;

    if(rand ===1){
    i.addHealthEffect(new healthType('Minor Wound',1,'wound'))
}else if(rand===2){
    i.addHealthEffect(new healthType('Moderate Wound',3,'wound'))

}else if(rand===3){
    i.addHealthEffect(new healthType('Severe Wound',5,'wound'))

}else if(rand===4){
    i.addHealthEffect(new healthType('Extreme Wound',10,'wound'))

}
                
            }


        }

    for(let k = 0; k<results.losingWounded;k++){
        makeNewPerson()
        changeImprisonment(everyone[everyone.length-1])
        let rand = Math.floor(Math.random() * 4) + 1;

    if(rand ===1){
        everyone[everyone.length-1].addHealthEffect(new healthType('Minor Wound',1,'wound'))
}else if(rand===2){
    everyone[everyone.length-1].addHealthEffect(new healthType('Moderate Wound',3,'wound'))

}else if(rand===3){
    everyone[everyone.length-1].addHealthEffect(new healthType('Severe Wound',5,'wound'))

}else if(rand===4){
    everyone[everyone.length-1].addHealthEffect(new healthType('Extreme Wound',10,'wound'))

}
    }

    if(resourceType==='wood'){

        wood+=resourceReward

        Math.min(woodMax,wood)

    }else if(resourceType==='stone'){
        stone+=resourceReward

        Math.min(stoneMax,stone)

        
    }else if(resourceType==='iron'){
        iron+=resourceReward

        Math.min(ironMax,iron)
    }

    gold+=goldReward
    Math.min(gold,goldMax)
    meals+=foodReward
    Math.min(meals,mealsMax)
}

}

let plagueDays = 0

function plagueSpread() {
    // Precompute infected and susceptible individuals
    const infected = everyone.filter(person => 
        person.healthBreakDown.some(e => e.type === 'plague')
    ).length;

    console.log(`Infected: ${infected}`);

    if (infected > 0) {
        plagueDays++;

        
        let infectionDifference = Math.min(
            Math.floor(infected * Math.exp(0.07 * plagueDays)) * (1-(infected/everyone.length)) - infected,
            everyone.length - infected 
        );

        console.log(`New Infections: ${infectionDifference}`);

        let susceptible = everyone.filter(person => 
            !person.healthBreakDown.some(e => e.type === 'plague') && 
            !person.moraleBreakDown.some(e => e.type === 'cure')
        );

        for (let i = 0; i < infectionDifference && i < susceptible.length; i++) {
            let person = susceptible[i];
            let rand = Math.random();

            addEventLog(`${person.name} has gotten the plague!`)

            if (rand < 0.40) {
                person.addHealthEffect(new healthType('Minor Plague', 1, 'plague'));
            } else if (rand < 0.80) {
                person.addHealthEffect(new healthType('Moderate Plague', 3, 'plague'));
            } else if (rand < 0.95) {
                person.addHealthEffect(new healthType('Severe Plague', 5, 'plague'));
            } else {
                person.addHealthEffect(new healthType('Extreme Plague', 10, 'plague'));
            }
        }
    } else {
        plagueDays = 0; 
    }
}  //everyone[0].addHealthEffect(new healthType('plague',5,'plague',))
