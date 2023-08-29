//* ---------- OOP, there it is! 
//*     Object Oriented Program is a paradigm in programming that organizes our code into re-usable objects that contain attributes/methods.


//? ---------- Objects
//?     Objects are designed around thinking of code like real world objects.
//?     They allow us to organize our code and take advantage of the four pillars of OOP.
//!     Pop Quiz: What are the 4 Pillars of OOP?

/**
 * This is a class for a Monster!
 * @param name (string) The name of the monster.
 * @returns This returns a constructed Monster Object.
 */
class Monster {
    constructor(name = "Slime", hp = 10, mp = 0, atk = 2, def = 0, type = "common") {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.atk = atk;
        this.def = def;
        this.type = type;
    }

    displayInfo() {
        console.log(`---------- Monster : ${this.name}`)
        console.log(`HP : ${this.hp}`)
        console.log(`MP : ${this.mp}`)
        console.log(`Attack : ${this.atk}`)
        console.log(`Defense : ${this.def}`)
        console.log(`Type : ${this.type}`)
        console.log(`---------------------------------`)

        // for (const [key, value] of Object.entries(this)) {
        //     console.log(`${key} : ${value}`);
        // }
    }

    attackMonster(target) {
        target.hp -= this.atk;
        console.log(`Target's HP: ${target.hp}\n Your HP: ${this.hp}`)
        // if (target.hp <= 0) {
        //     return "The target is dead!";
        // }
    }

}

const myMonster = new Monster();
const myMonster1 = new Monster();
myMonster.displayInfo();

myMonster.attackMonster(myMonster1);

//! ---------- Objects & Constructors
//?     Object declarations are *NOT* Hoisted! So we can not use a class before it's declared!



//! ---------- Inheritance

//?     Super(Super Class) is the source class.
//?     Sub Class is the new class that is using inheritance of the Super Class.

class BossMonster extends Monster {
    constructor() {
        super("Boss Slime", 20, 10, 5, 2, "Boss Monster")
        this.rage = 0;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Rage : ${this.rage}`)
    }

}

const theBoss = new BossMonster();

theBoss.displayInfo();


