import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EnergyMixSection from "../components/EnergyMixSection";

describe("EnergyMixSection", () => {
  it("renders energy mix data", () => {
    render(
      <EnergyMixSection
        energyMix={[
          {
            date: "2026-06-22",
            cleanEnergyPercentage: 54.74,
            sources: [
              { fuel: "wind", percentage: 30 },
              { fuel: "solar", percentage: 20 },
              { fuel: "gas", percentage: 50 },
            ],
          },
        ]}
      />
    );

    expect(
      screen.getByText(/miks energetyczny wielkiej brytanii/i)
    ).toBeInTheDocument();

    expect(screen.getByText("54.74%")).toBeInTheDocument();
    expect(screen.getByText(/wind/i)).toBeInTheDocument();
    expect(screen.getByText(/solar/i)).toBeInTheDocument();
    expect(screen.getByText(/gas/i)).toBeInTheDocument();
  });
});