import { describe, expect, it } from "vitest";
import { render, screen } from "@/test/test-utils";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders a search input with the default placeholder", () => {
    render(<SearchBar />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "search");
  });

  it("uses a custom placeholder when provided", () => {
    render(<SearchBar placeholder="Find products" />);

    expect(screen.getByPlaceholderText("Find products")).toBeInTheDocument();
  });
});
