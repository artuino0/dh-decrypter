const DecryptResult = () => {
  return (
    <div>
      <h1 className="text-2xl my-6">Ultimo Resultado:</h1>
      <ul className="bg-white text-black border w-[500px] rounded-lg mb-6 text-xl">
        <li className="font-bold px-3 py-3 border-b">Nombre:</li>
        <li className="font-bold px-3 py-3 border-b">Apellido:</li>
        <li className="font-bold px-3 py-3 ">ID:</li>
      </ul>
    </div>
  );
};

export default DecryptResult;
