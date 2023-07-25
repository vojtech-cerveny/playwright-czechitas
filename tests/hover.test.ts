import { test, expect } from "@playwright/test"

const animals = [
  { header: "Kočka", text: "A jaké krásné očička má!" },
  { header: "Pes", text: "A jak je heboučký!" },
  { header: "Jednorožec", text: "A jak je husťácký!" },
]

test.describe("Hover", () => {
  test("hover at animal", async ({ page }) => {
    await page.goto("https://automation-playground.czechitas.repl.co/hover.html")
    await page.getByRole("img", { name: "Kočka" }).scrollIntoViewIfNeeded()
    await page.getByRole("img", { name: "Kočka" }).hover()

    // await page.getByRole('heading', { name: 'Kočka' }).scrollIntoViewIfNeeded()
    await expect(page.getByRole("heading", { name: "Kočka" })).toBeVisible()
  })

  animals.forEach((animal) => {
    test(`hover at ${animal.header}`, async ({ page }) => {
      await page.goto("https://automation-playground.czechitas.repl.co/hover.html")
      await page.getByRole("img", { name: animal.header }).scrollIntoViewIfNeeded()
      await page.getByRole("img", { name: animal.header }).hover()

      // await page.getByRole('heading', { name: 'Kočka' }).scrollIntoViewIfNeeded()
      
      await expect(page.getByRole("heading", { name: animal.header })).toBeVisible()
      await expect(page.getByText(animal.text)).toBeVisible()
    })
  })
})
