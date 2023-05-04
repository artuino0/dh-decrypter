import { useState } from "react";
import { IResultado } from "../interfaces/resultado";

interface Props {
  setResultado: (data: IResultado) => void;
}

const Decrypter = (props: Props) => {
  const [cadena, setCadena] = useState("");

  const { setResultado } = props;

  const validarString = (): boolean => {
    const regex = /^[a-zA-ZñÑ]+0+[a-zA-ZñÑ]+0+\d+$/;
    return regex.test(cadena);
  };

  const desencritarString = () => {
    console.log(validarString());
    if (!validarString()) {
      return;
    }
    const partes = cadena.split(/0+/);
    setResultado({ first_name: partes[0], last_name: partes[1], id: partes[2] });
  };

  return (
    <>
      <div className="flex flex-col mx-auto text-center w-[500px] formulario animate__animated animate__fadeInUp">
        <h1 className="animate__animated animate__fadeIn text-4xl font-bold mb-4">Desencriptador</h1>
        <label htmlFor="cadena-encriptada" className="mb-1">
          Ingrese la cadena encriptada
        </label>
        <input
          placeholder="john000doe000123"
          type="text"
          className="text-center py-3 rounded-lg w-10/12 m-auto outline-blue-500"
          name="cadena-encriptada"
          id="cadena-encriptada"
          v-model="cadenaEncriptada"
          onChange={(e) => setCadena(e.target.value)}
        />
        <button className="bg-green-500 mx-auto px-5 py-3 rounded-lg w-fit mt-4" onClick={() => desencritarString()}>
          Desencriptar Cadena
        </button>
      </div>
    </>
  );
};

export default Decrypter;
