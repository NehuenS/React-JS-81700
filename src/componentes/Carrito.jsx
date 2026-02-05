import { useState } from "react";

export class Item {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function Carrito() {
    const [carrito, setCarrito] = useState([]);

    function addCarrito(i) {
        setCarrito(a => a.push(i));
    }
    function removeCarrito(i) {
        let x = carrito.indexOf(i);
        if (x === -1) {
            return
        }
        setCarrito(a => a.splice(x), 1)
    }
}
export default Carrito;