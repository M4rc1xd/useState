import { useState } from "react";

function veletlenSzin(): string {
  const piros = Math.floor(Math.random() * 256);
  const zold = Math.floor(Math.random() * 256);
  const kek = Math.floor(Math.random() * 256);

  return `rgb(${piros}, ${zold}, ${kek})`;
}

export default function ColorChanger() {
  const [hatterszin, setHatterszin] = useState("white");
  document.body.style.backgroundColor = hatterszin;
  return (
    <>
      <button
        type="button"
        onClick={() => setHatterszin(veletlenSzin())}
      >
        Új szín generálása
      </button>
    </>
  );
}
