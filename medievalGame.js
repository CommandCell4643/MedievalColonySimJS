window.addEventListener('load', function() {
    
})




class person{
    constructor(name, gender, job, age, residence, morale, loyalty, guilty, taxpayer, educated, health, infected, life){

this.name = name
this.gender = gender
this.job = job
this.age = age
this.residence = residence
this.hierarchy = function(job) {
    const peasants = ["farmer", "miner", "quarrier","lumberjack", "unemployed", ];
    const middleClass = ["blacksmith", "teacher", "chef", "tax collector", "general"];
    const upperClass = [ "researcher", "warden", "doctor", "diplomat", "judge"]

    if (peasants.includes(job)) {
        return "peasant";
    } else if (middleClass.includes(job)) {
        return "middle class";
    } else if (upperClass.includes(job)) {
        return "upper class";
    }else {
        return "unknown class";
    }
};

this.morale = morale
this.loyalty = loyalty
this.guilty = guilty
this.taxpayer = taxpayer
this.educated = educated
this.health = health    //0 - 100 based on plague, age, 
this.infected = infected //Can be "none" "minor <30" "major<60 " "severe>60"
this.life = life

this.displayInfo = function(){
    console.log(this.hierarchy(job))
}


    }
}





 let newGuy = new person("bob", true,"judge", 1, "hovel", 32, 32, true, false, true, 32, true)
newGuy.displayInfo()