import { useContext, useState } from "react"
import CarritoContexto from "../contexto/CarritoContexto"
import { createOrdenDeCompra } from "../datos/firestore"

export default function Carrito() {
  const { carrito } = useContext(CarritoContexto);
  const [formData, setFormData] = useState({
    comprador: "",
    telefono: "",
    email: ""
  });

  function checkout() {
    const ordenDeCompra = {
      comprador: formData,
      productos: carrito,
      total: CarritoContexto.totalCarrito(),
      fecha: new Date()
    }
    createOrdenDeCompra(ordenDeCompra);
  }

  function enviarForm(e) {
    e.preventDefault()
    if(formData.some((f) => f == "")) {
      console.error("No hay datos validos")
    } else {
      checkout();
      alert(`GRACIAS ${formData.comprador}, POR SU COMPRA!`);
      reinicializar();
    }
  }

  function actualizarDatos(e) {
    const { value, name } = e.target;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  }
  function reinicializar() {
    setFormData({
      comprador: "",
      telefono: "",
      email: ""
    });
  }

  return (
    <>

    </>
  )
}