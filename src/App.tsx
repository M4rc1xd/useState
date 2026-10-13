import Fejlec from "./components/fejlec";
import ColorChanger from "./components/colorChanger";
import Lablec from "./components/lablec";
import bulbOff from "./assets/pic_bulboff.gif";
import bulbOn from "./assets/pic_bulbon.gif";
import KepBetolto from "./components/kepBetolto";
import { useState } from "react";

function App() {
  const [isBulbOn, setIsBulbOn] = useState(false);
  return (
    <>
      <Fejlec title="Kapcsolo"/>
      <KepBetolto
      src={isBulbOn ? bulbOn : bulbOff}
      alt={isBulbOn ? "Bekapcsolt izzó" : "Kikapcsolt izzó"}
      onClick={() => setIsBulbOn((currentState) => !currentState)}
    />

      <Fejlec title="Color Changer" />
      <ColorChanger />
      <Lablec />
    </>
  );
}

export default App;
