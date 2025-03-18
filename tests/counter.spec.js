const { count } = require("../services/count")

describe("count function", () => {
  it("Should count the number of people and animals", () => {
    expect(count()).toBeTruthy()
    expect(count()[0].name).toEqual("Dillauti [5]")
    expect(count()[0].people[0].name).toEqual("Winifred Graham [6]")
    expect(count()[1].name).toEqual("Tohabdal [8]")
    expect(count()[1].people[0].name).toEqual("Effie Houghton [7]")
  })

  it("Should count zero animals if no animals exist in count", () => {
    const emptyData = [{ name: "EmptyCity", people: [] }]
    const expectedEmptyCount = [{ name: "EmptyCity [0]", people: [] }]

    const countResult = count(emptyData)
    expect(countResult).toEqual(expectedEmptyCount)
  })

  it("should use the default data file if no parameters are specified", () => {
    const countResult = count()

    expect(countResult[0].name).toEqual("Dillauti [5]")
    expect(countResult[0].people[0].name).toEqual("Winifred Graham [6]")
  })
})
