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
      <h1 className="animate__animated animate__fadeIn"></h1>
      <div className="formulario animate__animated animate__fadeInUp">
        <label htmlFor="cadena-encriptada">Ingrese la cadena encriptada</label>
        <input placeholder="john000doe000123" type="text" name="cadena-encriptada" id="cadena-encriptada" v-model="cadenaEncriptada" onChange={(e) => setCadena(e.target.value)} />
        {cadena}
        <button onClick={() => desencritarString()}>Desencriptar Cadena</button>
      </div>
    </>
  );
};

export default Decrypter;
