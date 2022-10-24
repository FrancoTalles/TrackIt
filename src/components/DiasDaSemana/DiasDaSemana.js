import { useState } from "react";
import { DiasSemana } from "./styledDiasDaSemana";

export default function DiasDaSemana(props) {
  const { index, adicionarDias, dia } = props;

  const [clicado, setClicado] = useState(false);

  return (
    <DiasSemana
      onClick={() => {
        adicionarDias(index);
        setClicado(!clicado);
      }}
      key={index}
      clicado={clicado}
      data-identifier="week-day-btn"
    >
      {dia}
    </DiasSemana>
  );
}
