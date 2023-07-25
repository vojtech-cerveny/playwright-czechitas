import { test, expect } from "@playwright/test"

test.describe("Czechitas automation page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Automation Playground/)
  })

  test("button 'Najdi lisku' redirect page to correct one", async ({ page }) => {
    // Click the get started link.
    await page.getByRole("link", { name: "Najdi lišku" }).click()

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*findfox.html/)
  })
})
