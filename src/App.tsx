import { useState } from "react";
import { IResultado } from "./interfaces/resultado";
import "./App.css";
import Decrypter from "./components/Decrypter";
import DecryptResult from "./components/DecryptResult";
import Error from "./components/Error";

function App() {
  const [resultado, setResultado] = useState<IResultado>({ first_name: "", last_name: "", id: "" });
  const [error, setError] = useState<boolean>(false);
  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col items-center justify-center">
      <Decrypter setResultado={setResultado} setError={setError} />
      {resultado.first_name !== "" ? <DecryptResult resultado={resultado} /> : null}

      {error ? <Error /> : null}
      <div className="fixed bottom-5 right-5 text-xs">Desarrollado por: Jose Arturo Muñoz Castorena</div>
    </div>
  );
}

export default App;
