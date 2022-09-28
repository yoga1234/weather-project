import "./App.css";
import { Details, Forecast, Hero, Location, WeatherMain } from "./components";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="main-content">
        <div className="left">
          <WeatherMain />
        </div>
        <div className="right">
          <Location />
          <Details />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
