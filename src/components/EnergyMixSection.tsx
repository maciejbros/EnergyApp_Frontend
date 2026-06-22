import type { DailyEnergyMix } from "../types/energy";
import EnergyPieChart from "./EnergyPieChart";

type EnergyMixSectionProps = {
  energyMix: DailyEnergyMix[];
};

function EnergyMixSection({ energyMix }: EnergyMixSectionProps) {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Miks energetyczny Wielkiej Brytanii</h2>
        <p>Aktualny i prognozowany miks energetyczny dla trzech dni.</p>
      </div>

      <div className="charts-grid">
        {energyMix.map((day) => (
          <EnergyPieChart key={day.date} day={day} />
        ))}
      </div>
    </section>
  );
}

export default EnergyMixSection;