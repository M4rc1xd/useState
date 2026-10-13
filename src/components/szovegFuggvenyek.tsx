import {useState} from "react";

export default function szovegFuggvenyek() {
    const [szoveg, setSzoveg] = useState<string>("");

    return (
        <>
        <input id="szoveg-input" type="text" value={szoveg} onChange={(e) => setSzoveg(e.target.value)} />
        <p><span id="szoveg-p">{szoveg}</span>, hosszusaga: {szoveg.length}</p>
        <button onClick={() => document.getElementById("szoveg-p")!.setAttribute("style", "text-transform: uppercase;")}>nagybetus</button>
        <button onClick={() => document.getElementById("szoveg-p")!.setAttribute("style", "text-transform: lowercase;")}>kisbetus</button>
        <button onClick={() => {
            document.getElementById("szoveg-p")!.setAttribute("style", "text-transform: none;");
            setSzoveg("");
        }}>visszaallit</button>
        </>
    )
}