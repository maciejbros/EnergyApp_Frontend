import type { ChargingWindowResult as ChargingWindowResultType } from "../types/energy";
import { formatDateTime } from "../utils/dateFormat";

type ChargingWindowResultProps = {
  result: ChargingWindowResultType | null;
};

function ChargingWindowResult({ result }: ChargingWindowResultProps) {
  if (!result) {
    return null;
  }

  return (
    <div className="result-card">
      <h3>Najlepsze okno ładowania</h3>

      <div className="result-grid">
        <div>
          <span>Start</span>
          <strong>{formatDateTime(result.start)}</strong>
        </div>

        <div>
          <span>Koniec</span>
          <strong>{formatDateTime(result.end)}</strong>
        </div>

        <div>
          <span>Średni udział czystej energii</span>
          <strong>{result.averageCleanEnergyPercentage.toFixed(2)}%</strong>
        </div>
      </div>
    </div>
  );
}

export default ChargingWindowResult;