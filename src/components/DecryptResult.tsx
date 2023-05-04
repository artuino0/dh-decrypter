import { IResultado } from "../interfaces/resultado";

interface Props {
  resultado: IResultado;
}

const DecryptResult = (props: Props) => {
  const { resultado } = props;
  return (
    <div className="flex flex-col animate__animated animate__fadeInUp">
      <h1 className="text-2xl my-6">Ultimo Resultado:</h1>
      <ul className="bg-white text-black border w-[500px] rounded-lg mb-6 text-xl">
        <li className="px-3 py-3 border-b">
          <b>Nombre: </b>
          {resultado.first_name}
        </li>
        <li className="px-3 py-3 border-b">
          <b>Apellido: </b>
          {resultado.last_name}
        </li>
        <li className="px-3 py-3 ">
          <b>ID: </b>
          {resultado.id}
        </li>
      </ul>
      <span className="px-6 py-3 bg-green-200 text-green-700 border border-green-500 rounded-lg">{JSON.stringify(resultado)}</span>
    </div>
  );
};

export default DecryptResult;
