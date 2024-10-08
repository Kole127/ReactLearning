import "./App.css";
import { Suma, x, y, Produkt, Razlika, NewHeading, Logo, IspisImena } from "./Components";
import generateRandomString from "generate-random-strings";

const ispisRandom = "Kad si prijan reci";
const ispisRandom2 = generateRandomString();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewHeading />
        <IspisImena imena="15" /> {/* UPIŠI broj <10 ZA MUŠKA, >= ZA ŽENSKA */}
        <Logo />
        <Suma /> Zbroj: {x + y}
        <Produkt />
        <Razlika />
        <h4>{ispisRandom + " " + ispisRandom2}</h4>
      </header>
    </div>
  );
}

export default App;
