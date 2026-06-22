type ChargingWindowFormProps = {
  hours: string;
  loading: boolean;
  onHoursChange: (hours: string) => void;
  onSubmit: () => void;
};

function ChargingWindowForm({
  hours,
  loading,
  onHoursChange,
  onSubmit,
}: ChargingWindowFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className="charging-form" onSubmit={handleSubmit}>
      <label htmlFor="hours">Czas ładowania</label>

      <div className="form-row">
        <input
          id="hours"
          type="number"
          min="1"
          max="6"
          placeholder="1-6"
          value={hours}
          onChange={(event) => onHoursChange(event.target.value)}
        />

        <span>godzin</span>

        <button type="submit" disabled={loading}>
          {loading ? "Obliczanie..." : "Wyznacz najlepsze okno"}
        </button>
      </div>

      <p className="hint">Podaj pełną liczbę godzin od 1 do 6.</p>
    </form>
  );
}

export default ChargingWindowForm;