// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -=damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -=damage;
        if(this.health<=0){
            return `${this.name} has died in act of combat`;
        }
        else{
            return `${this.name} has received ${damage} points of damage`;
        }
        
    }
    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
    }
    receiveDamage(damage){
        this.health -=damage;
        if(this.health<=0){
            return `A Saxon has died in combat`;
        }
        else{
            return `A Saxon has received ${damage} points of damage`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        
        let viking =this.vikingArmy[(Math.floor(Math.random() * (this.vikingArmy.length - 0)) + 0)];
        let indexSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 0)) + 0;
        let saxon =this.saxonArmy[indexSaxon];
        saxon.receiveDamage(viking.strength);
        if(saxon.health<=0){
            this.saxonArmy.pop(indexSaxon);
            indexSaxon ="A Saxon has died in combat"
        }
        else{
            indexSaxon = saxon.health;
        }
        return indexSaxon;
    }

    saxonAttack(){
        let saxon =this.saxonArmy[(Math.floor(Math.random() * (this.saxonArmy.length - 0)) + 0)];
        let indexSaxon = Math.floor(Math.random() * (this.vikingArmy.length - 0)) + 0;
        let viking =this.vikingArmy[indexSaxon];
        let mensaje = viking.receiveDamage(saxon.strength);
        if(viking.health<=0){
            this.vikingArmy.pop(indexSaxon);
            indexSaxon ="A Saxon has died in combat"
        }
        else{
            indexSaxon = mensaje;
        }
        return indexSaxon;
    }
    
    showStatus(){
        let mensaje;
        if(this.saxonArmy.length ==0){
            mensaje="Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length ==0){
            mensaje="Saxons have fought for their lives and survive another day...";
        }
        else if(this.saxonArmy.length >=1 && this.vikingArmy.length >=1 ){
            mensaje="Vikings and Saxons are still in the thick of battle.";
        }
        return mensaje;
    }
}
