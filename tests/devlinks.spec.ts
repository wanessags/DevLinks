import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("01 - Deve carregar o DevLinks", async ({ page }) => {
  await expect(page).toHaveTitle("DevLinks");

  await expect(page.locator(".container")).toBeVisible();

  await expect(page.locator(".profile")).toBeVisible();
});

test("02 - Deve exibir os quatro links", async ({ page }) => {
  const links = page.locator(".links a");

  await expect(links).toHaveCount(4);

  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("href", /^https:\/\//);

    await expect(link).toHaveAttribute("target", "_blank");

    await expect(link).toHaveAttribute("rel", /noopener noreferrer/);
  }
});

test("03 - Deve exibir as redes sociais", async ({ page }) => {
  const socialLinks = page.locator(".social-links a");

  await expect(socialLinks).toHaveCount(4);

  await expect(page.getByRole("link", { name: /GitHub/i })).toBeVisible();

  await expect(page.getByRole("link", { name: /Instagram/i })).toBeVisible();

  await expect(page.getByRole("link", { name: /YouTube/i })).toBeVisible();

  await expect(page.getByRole("link", { name: /LinkedIn/i })).toBeVisible();
});

test("04 - Deve alternar entre claro e escuro", async ({ page }) => {
  const app = page.locator(".app");

  const themeToggle = page.getByRole("switch", {
    name: "Modo escuro",
  });

  await expect(app).toHaveAttribute("data-theme", "dark");

  await themeToggle.click();

  await expect(app).toHaveAttribute("data-theme", "light");

  await themeToggle.click();

  await expect(app).toHaveAttribute("data-theme", "dark");
});

test("05 - Deve preservar o tema após atualizar", async ({ page }) => {
  const themeToggle = page.getByRole("switch", {
    name: "Modo escuro",
  });

  await themeToggle.click();

  await expect(page.locator(".app")).toHaveAttribute("data-theme", "light");

  await expect
    .poll(async () => {
      return page.evaluate(() => localStorage.getItem("devlinks-theme"));
    })
    .toBe("light");

  await page.reload();

  await expect(page.locator(".app")).toHaveAttribute("data-theme", "light");
});

test("06 - Não deve apresentar rolagem horizontal", async ({ page }) => {
  const hasHorizontalOverflow = await page.evaluate(() => {
    return (
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth
    );
  });

  expect(hasHorizontalOverflow).toBe(false);
});
