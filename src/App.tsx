import { useState } from "react";
import { IResultado } from "./interfaces/resultado";
import "./App.css";
import Decrypter from "./components/Decrypter";
import DecryptResult from "./components/DecryptResult";

function App() {
  const [resultado, setResultado] = useState<IResultado>({ first_name: "", last_name: "", id: "" });

  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col items-center justify-center">
      <Decrypter setResultado={setResultado} />
      <DecryptResult />
      <span className="px-6 py-3 bg-green-200 text-green-700 border border-green-500 rounded-lg">{JSON.stringify(resultado)}</span>
    </div>
  );
}

export default App;
