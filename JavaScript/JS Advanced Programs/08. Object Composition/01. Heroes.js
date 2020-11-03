function solve() {

    const fighterCreater = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100,
            fight: function () {
                console.log(`${this.name} slashes at the foe!`)
                this.stamina--;
            },
        }
        return { ...state }
    }

    const mageCreater = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100,
            cast: function (spellName) {
                console.log(`${this.name} cast ${spellName}`)
                this.mana--;
            },
        }
        return { ...state }
    }

    return { fighter: fighterCreater, mage: mageCreater }
}


let creator = solve();

let fighter = creator.fighther('Sam');
fighter.fight();

console.log(fighter.stamina);

let mage = creator.mage('Lili');
mage.cast('thunder');
mage.cast('fire');

console.log(mage.mana);
