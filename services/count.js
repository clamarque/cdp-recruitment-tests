const { data } = require("../data/data")
/**
 * Count People and Animals inside an Array data
 * @param {Array<Object>} dataQuery optional parameter
 * @returns {Array<Object>}
 */
const count = (dataQuery) => {
  if (dataQuery === undefined || dataQuery === null) {
    return data.map(({ name, people }) => {
      const countedPeople = people.map((person) => ({
        name: `${person.name} [${person.animals.length}]`,
        animals: person.animals,
      }))

      return {
        name: `${name} [${people.length}]`,
        people: countedPeople,
      }
    })
  }

  if (!dataQuery.length) {
    return []
  }

  const countedResults = dataQuery.map(({ name, people }) => {
    const countedPeople = people.map((person) => ({
      name: `${person.name} [${person.animals.length}]`,
      animals: person.animals,
    }))

    return {
      name: `${name} [${people.length}]`,
      people: countedPeople,
    }
  })

  return countedResults
}

module.exports = {
  count,
}
