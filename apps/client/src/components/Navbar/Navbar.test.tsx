import { describe, expect, it } from "vitest";
import { render, screen } from "@/test/test-utils";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the brand name and logo", async () => {
    render(await Navbar());

    expect(screen.getByText("TrendHood")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "TrendHood" })).toHaveAttribute(
      "src",
      "/logo.png",
    );
  });

  it("renders navigation links and the search bar", async () => {
    render(await Navbar());

    expect(screen.getByRole("link", { name: /TrendHood/i })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Sign In" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
});
