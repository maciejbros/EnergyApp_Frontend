import { useEffect, useState } from "react";
import { getBestChargingWindow, getEnergyMix } from "./api/energyApi";
import ChargingWindowForm from "./components/ChargingWindowForm";
import ChargingWindowResult from "./components/ChargingWindowResult";
import EnergyMixSection from "./components/EnergyMixSection";
import type { ChargingWindowResult as ChargingWindowResultType, DailyEnergyMix } from "./types/energy";
import "./App.css";

function App() {
  const [energyMix, setEnergyMix] = useState<DailyEnergyMix[]>([]);
  const [chargingWindow, setChargingWindow] =
    useState<ChargingWindowResultType | null>(null);

  const [hours, setHours] = useState<string>("");
  const [loadingEnergyMix, setLoadingEnergyMix] = useState<boolean>(false);
  const [loadingChargingWindow, setLoadingChargingWindow] =
    useState<boolean>(false);

  const [error, setError] = useState<string>("");

  useEffect(() => {
    loadEnergyMix();
  }, []);

  async function loadEnergyMix() {
    try {
      setLoadingEnergyMix(true);
      setError("");

      const data = await getEnergyMix();
      setEnergyMix(data);
    } catch (err) {
      setError("Nie udało się pobrać miksu energetycznego.");
      console.error(err);
    } finally {
      setLoadingEnergyMix(false);
    }
  }

  async function handleFindChargingWindow() {
    const parsedHours = Number(hours);

    if (!hours || parsedHours < 1 || parsedHours > 6) {
      setError("Czas ładowania musi być pełną liczbą od 1 do 6 godzin.");
      return;
    }

    try {
      setLoadingChargingWindow(true);
      setError("");

      const data = await getBestChargingWindow(parsedHours);
      setChargingWindow(data);
    } catch (err) {
      setError("Nie udało się wyznaczyć najlepszego okna ładowania.");
      console.error(err);
    } finally {
      setLoadingChargingWindow(false);
    }
  }

  return (
    <main className="app">

      {error && <div className="error">{error}</div>}

      {loadingEnergyMix ? (
        <p className="loading">Ładowanie miksu energetycznego...</p>
      ) : (
        <EnergyMixSection energyMix={energyMix} />
      )}

      <section className="section">
        <div className="section-header">
          <h2>Optymalne ładowanie samochodu</h2>
          <p>
            Aplikacja wybierze okno czasowe z najwyższym średnim udziałem
            czystej energii.
          </p>
        </div>

        <ChargingWindowForm
          hours={hours}
          loading={loadingChargingWindow}
          onHoursChange={setHours}
          onSubmit={handleFindChargingWindow}
        />

        <ChargingWindowResult result={chargingWindow} />
      </section>
    </main>
  );
}

export default App;