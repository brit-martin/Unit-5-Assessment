import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 
export const query1 = await Human.findOne({
    where: { humanId: '2'}
});

// Get the first animal whose species is "fish"
export const query2 = await Animal.findOne({
    where: { species: "fish"}
});

// Get all animals belonging to the human with primary key 5
export const query3 = await Animal.findAll({
    where: { humanId: '5'}
});

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({
    where: { birthYear: { [Op.gt] : 2015}
    },   
});

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({
    where: { fname: { [Op.like]: 'J%'}
    },
});

// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({
    where: { birthYear: { [Op.is]: null},
    }, 
})

// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({
    where: { species: {[Op.or]: ['fish', 'rabbit']}}
})

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = await Human.findAll({
    where: {email: { [Op.notLike]: '%gmail.com'}}
});

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const person = await Human.findAll()

    for (let i=0; i < person.length; i ++){
        console.log('heyyy')
        console.log(person[i])
        for (let k =0; k < person[i].length; k++){
            let humanName = person[i][k]
            console.log('-----')
            console.log(humanName)
        }
           
    }
}

printHumansAndAnimals()

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {
    const humans = new Set();
    humans.add(humanName)
    
}
console.log( await getHumansByAnimalSpecies('dog'))
