const { count } = require("../services/count")
const { filter } = require("../services/filter")

describe("Count Service", () => {
  test("should count people and animals correctly with default data", () => {
    const result = count()
    expect(result).toBeDefined()
    expect(Array.isArray(result)).toBe(true)
    result.forEach((country) => {
      expect(country.name).toMatch(/\[\d+\]$/)
      country.people.forEach((person) => {
        expect(person.name).toMatch(/\[\d+\]$/)
      })
    })
  })

  test("should count people and animals correctly with custom data", () => {
    const customData = [
      {
        name: "Test Country",
        people: [
          {
            name: "John",
            animals: [{ name: "Dog" }, { name: "Cat" }],
          },
          {
            name: "Jane",
            animals: [{ name: "Bird" }],
          },
        ],
      },
    ]

    const result = count(customData)
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe("Test Country [2]")
    expect(result[0].people[0].name).toBe("John [2]")
    expect(result[0].people[1].name).toBe("Jane [1]")
  })

  test("should handle empty data array", () => {
    const result = count([])
    expect(result).toEqual([])
  })
})

describe("Filter Service", () => {
  test("should filter animals by name correctly", () => {
    const result = filter("ry")
    expect(result).toBeDefined()
    expect(Array.isArray(result)).toBe(true)
    result.forEach((country) => {
      country.people.forEach((person) => {
        person.animals.forEach((animal) => {
          expect(animal.name).toContain("ry")
        })
      })
    })
  })

  test('should return "no results found" when no matches', () => {
    const result = filter("xyz123nonexistent")
    expect(result).toBe("no results found")
  })

  test('should return "no query provided" when query is empty', () => {
    const result = filter("")
    expect(result).toBe("no query provided")
  })

  test("should be case sensitive", () => {
    const result = filter("RY")
    expect(result).toBe("no results found")
  })

  test("should handle special characters in query", () => {
    const result = filter("ry.")
    expect(result).toBeDefined()
    expect(Array.isArray(result)).toBe(true)
    result.forEach((country) => {
      country.people.forEach((person) => {
        person.animals.forEach((animal) => {
          expect(animal.name).toContain("ry")
        })
      })
    })
  })
})
