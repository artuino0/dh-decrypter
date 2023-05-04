import { useState } from "react";
import { IResultado } from "./interfaces/resultado";
import "./App.css";
import Decrypter from "./components/Decrypter";

function App() {
  const [resultado, setResultado] = useState<IResultado>({ first_name: "", last_name: "", id: "" });

  return (
    <div>
      <Decrypter setResultado={setResultado} />
      {JSON.stringify(resultado)}
    </div>
  );
}

export default App;
