export type EnergySource = {
  fuel: string;
  percentage: number;
};

export type DailyEnergyMix = {
  date: string;
  sources: EnergySource[];
  cleanEnergyPercentage: number;
};

export type ChargingWindowResult = {
  start: string;
  end: string;
  averageCleanEnergyPercentage: number;
};