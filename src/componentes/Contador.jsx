import Boton from "./Boton.jsx";
import { useState } from "react";

export default function Contador(props) {
  const [contador, setContador] = useState(0);
  function mas() {
    setContador(contador + 1);
  }
  function menos() {
    setContador(contador - 1);
  }
  return (
    <>
      <div className="card row align-items-center w-100 p-2">
        <div className='d-inline'>
          <Boton clases="btn btn-primary"
            clickHandler={() => menos()}
            etiqueta="-"
          />
          {contador}
          <Boton clases="btn btn-primary"
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
