import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChargingWindowResult from "../components/ChargingWindowResult";

describe("ChargingWindowResult", () => {
  it("does not render anything when result is null", () => {
    const { container } = render(<ChargingWindowResult result={null} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders charging window result", () => {
    render(
      <ChargingWindowResult
        result={{
          start: "2026-06-22T10:00:00",
          end: "2026-06-22T13:00:00",
          averageCleanEnergyPercentage: 72.45,
        }}
      />
    );

    expect(screen.getByText(/najlepsze okno ładowania/i)).toBeInTheDocument();
    expect(screen.getByText(/start/i)).toBeInTheDocument();
    expect(screen.getByText(/koniec/i)).toBeInTheDocument();
    expect(screen.getByText("72.45%")).toBeInTheDocument();
  });
});