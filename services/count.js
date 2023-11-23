const { data } = require('../data/data')
/**
 * Count People and Animals inside an Array data
 * @param {Array<Object>} dataQuery optional parameter
 * @returns {Array<Object>}
 */
const count = (dataQuery) => {
    const countedResults = (dataQuery?.length ? dataQuery : data).map(({ name, people }) => {
        const countedPeople = people.map(person => ({
            name: `${person.name} [${person.animals.length}]`,
            animals: person.animals
        }));

        return {
            name: `${name} [${people.length}]`,
            people: countedPeople
        };
    });

    return countedResults;
};

module.exports = {
    count
  }