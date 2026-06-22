import type { ChargingWindowResult, DailyEnergyMix } from "../types/energy";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getEnergyMix(): Promise<DailyEnergyMix[]> {
  const response = await fetch(`${API_BASE_URL}/Energy/mix`);

  if (!response.ok) {
    throw new Error("Nie udało się pobrać miksu energetycznego.");
  }

  return response.json();
}

export async function getBestChargingWindow(
  hours: number
): Promise<ChargingWindowResult> {
  const response = await fetch(
    `${API_BASE_URL}/Energy/charging-window?hours=${hours}`
  );

  if (!response.ok) {
    throw new Error("Nie udało się pobrać najlepszego okna ładowania.");
  }

  return response.json();
}