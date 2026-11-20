import { describe, it, expect } from "vitest";
import config from "../../vercel.json";

describe("Vercel delivery", () => {
  it("serves the gender equality page through the app without catching PDF files", () => {
    const fallback = config.rewrites.find((rule) => rule.destination === "/index.html");
    expect(fallback).toBeDefined();
    if (!fallback) return;
    const route = new RegExp(`^${fallback.source}$`);
    expect(route.test("/parita-di-genere")).toBe(true);
    expect(route.test("/parita-di-genere/")).toBe(true);
    expect(route.test("/assets/app.js")).toBe(false);
    expect(route.test("/__l5e/assets-v1/example/policy.pdf")).toBe(false);
  });

  it("proxies PDF assets before the page fallback", () => {
    const assetIndex = config.rewrites.findIndex((rule) => rule.source === "/__l5e/assets-v1/:path*");
    const fallbackIndex = config.rewrites.findIndex((rule) => rule.destination === "/index.html");
    expect(assetIndex).toBeGreaterThanOrEqual(0);
    expect(assetIndex).toBeLessThan(fallbackIndex);
    expect(config.rewrites[assetIndex]?.destination).toBe("https://blueinnovation.lovable.app/__l5e/assets-v1/:path*");
  });
});