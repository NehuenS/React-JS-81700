import Boton from "./Boton.jsx";
import { useState } from "react";

export default function Contador(props) {
  const [contador, setContador] = useState(0);
  function mas() {
    setContador(contador + 1);
  }
  function menos() {
    setContador(Math.max(contador - 1, 0));
  }
  return (
    <>
      <div className="row align-items-center justify-content-center w-100 p-2">
        <div className='d-flex justify-content-center mb-3'>
          <Boton clases="btn btn-danger botones-cuadrados"
            clickHandler={() => menos()}
            etiqueta="-"
          />
          <span className="mx-3 align-self-center fw-bold fs-5">{contador}</span>
          <Boton clases="btn btn-success botones-cuadrados"
            clickHandler={() => mas()}
            etiqueta="+"
          />
        </div>
        <Boton
          clases="btn btn-primary w-100"
          clickHandler={function () {
            props.onAgregar(contador);
            setContador(0);
          }}
          etiqueta="Agregar al carrito"
        />
      </div>
    </>
  )
}
