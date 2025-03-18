const { execSync } = require("child_process")
const path = require("path")

describe("CLI Interface", () => {
  const appPath = path.join(__dirname, "..", "app.js")

  test("should handle filter command", () => {
    const result = execSync(`node ${appPath} filter ry`, {
      env: { ...process.env, NODE_ENV: "test" },
    }).toString()
    expect(result).toBeTruthy()
    const parsedResult = JSON.parse(result)
    expect(Array.isArray(parsedResult)).toBe(true)
    expect(parsedResult.length).toBeGreaterThan(0)
  })

  test("should handle count command", () => {
    const result = execSync(`node ${appPath} count`, {
      env: { ...process.env, NODE_ENV: "test" },
    }).toString()
    expect(result).toBeTruthy()
    const parsedResult = JSON.parse(result)
    expect(Array.isArray(parsedResult)).toBe(true)
    expect(parsedResult.length).toBeGreaterThan(0)
  })

  test("should handle unknown command", () => {
    const result = execSync(`node ${appPath} unknown`, {
      env: { ...process.env, NODE_ENV: "test" },
    }).toString()
    expect(result.trim()).toBe("Commande non reconnue")
  })

  test("should handle filter command with empty query", () => {
    const result = execSync(`node ${appPath} filter`, {
      env: { ...process.env, NODE_ENV: "test" },
    }).toString()
    expect(result.trim()).toBe('"no query provided"')
  })
})
