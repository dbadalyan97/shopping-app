import { describe, expect, it } from "vitest";
import { render, screen } from "@/test/test-utils";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the brand name and copyright for the current year", async () => {
    render(await Footer());

    const year = new Date().getFullYear();

    expect(screen.getAllByText("TrendHood").length).toBeGreaterThan(0);
    expect(
      screen.getByText(`© ${year} TrendHood`),
    ).toBeInTheDocument();
    expect(screen.getByText("All rights reserved.")).toBeInTheDocument();
  });

  it("renders footer section headings and links", async () => {
    render(await Footer());

    expect(screen.getByText("Links")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Homepage" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "All Products" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Affiliate Program" }),
    ).toBeInTheDocument();
  });
});
