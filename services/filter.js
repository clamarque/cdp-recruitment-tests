const { data } = require("../data/data")

/**
 * Filter a list of elements containing a pattern
 * @param {string} query
 * @returns {Array<Object>}
 */
const filter = (query) => {
  if (!query) {
    return "no query provided"
  }

  // Remove special characters
  const cleanQuery = query.replace(/[^a-zA-Z0-9]/g, "")
  const filteredResults = data.reduce((acc, current) => {
    const peopleWithFilteredAnimals = current.people.reduce(
      (peopleAcc, person) => {
        const filteredAnimals = person.animals.filter((animal) =>
          animal.name.replace(/[^a-zA-Z0-9]/g, "").includes(cleanQuery)
        )
        if (filteredAnimals.length > 0) {
          peopleAcc.push({
            name: person.name,
            animals: filteredAnimals.map((animal) => ({ name: animal.name })),
          })
        }
        return peopleAcc
      },
      []
    )

    if (peopleWithFilteredAnimals.length > 0) {
      acc.push({
        name: current.name,
        people: peopleWithFilteredAnimals,
      })
    }

    return acc
  }, [])

  return filteredResults.length ? filteredResults : "no results found"
}

module.exports = {
  filter,
}
