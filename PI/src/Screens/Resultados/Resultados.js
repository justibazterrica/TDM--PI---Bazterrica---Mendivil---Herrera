import React, { useState, useEffect } from "react";
import ResultadosBusqueda from "../../components/ResultadosBusqueda/ResultadosBusqueda";

export default function Resultados(props) {
  const [resultados, setResultados] = useState(props.match.params.search);
  const [tipo, setTipo] = useState(props.match.params.value);

  return (
    <div>
      <h1>Resultados de: {resultados}</h1>
      <ResultadosBusqueda search={resultados} tipo={tipo} />
    </div>
  )
}