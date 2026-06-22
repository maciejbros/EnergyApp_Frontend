import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ChargingWindowForm from "../components/ChargingWindowForm";

describe("ChargingWindowForm", () => {
  it("renders charging time input and submit button", () => {
    render(
      <ChargingWindowForm
        hours=""
        loading={false}
        onHoursChange={vi.fn()}
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByLabelText(/czas ładowania/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /wyznacz najlepsze okno/i })
    ).toBeInTheDocument();
  });

  it("calls onHoursChange when user types value", async () => {
    const user = userEvent.setup();
    const onHoursChange = vi.fn();

    render(
      <ChargingWindowForm
        hours=""
        loading={false}
        onHoursChange={onHoursChange}
        onSubmit={vi.fn()}
      />
    );

    const input = screen.getByLabelText(/czas ładowania/i);

    await user.type(input, "3");

    expect(onHoursChange).toHaveBeenCalledWith("3");
  });

  it("calls onSubmit when form is submitted", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(
      <ChargingWindowForm
        hours="3"
        loading={false}
        onHoursChange={vi.fn()}
        onSubmit={onSubmit}
      />
    );

    await user.click(
      screen.getByRole("button", { name: /wyznacz najlepsze okno/i })
    );

    expect(onSubmit).toHaveBeenCalledOnce();
  });
});