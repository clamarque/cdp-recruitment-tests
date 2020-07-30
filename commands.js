const data = require('./javascript/data');
util = require('util');

const filter = (query) => {
    let results = [];

    for (let i = 0; i < data.data.length; i++) {
        let people = [];
        for (let value of data.data[i].people) {
            const animals = [];
            for (const animal of value.animals) {
                if (animal.name.includes(query)) {
                    animals.push({ name: animal.name });
                }
            }
            if (animals.length) {
                people.push({
                    name: value.name,
                    animals
                });
            }
        }

        if (people.length) {
            results.push({
                name: data.data[i].name,
                people
            });
        }
    }
    console.log(util.inspect(results, { depth: 12 }));
    return results;
}

const count = () => {
    let results = [];
    for (let { name, people } of data.data) {
        let countAnimals = [];
        for (let value of people) {
            countAnimals.push({
                name: `${value.name} [${value.animals.length}]`,
                animals: value.animals
            });
        }
        results.push({
            name: `${name} [${people.length}]`,
            people: countAnimals
        });
    }
    console.log(util.inspect(results, { depth: 12 }));
    return results
}

module.exports = {
    filter,
    count
}