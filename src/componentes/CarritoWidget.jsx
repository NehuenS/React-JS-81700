import { useContext } from "react"
import CarritoContexto from "../contexto/CarritoContexto";
import { Link } from "react-router";


export default function CartWidget() {
    const { productosEnCarrito } = useContext(CarritoContexto);
    const cantidad = productosEnCarrito();

    return (
        <div className="position-fixed bottom-0 end-0 p-3 carrito-widget">
            <Link
                to="/carrito"
                className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-lg carrito-widget-link"
            >
                🛒
                {cantidad > 0 && (
                    <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle carrito-widget-contador">
                        {cantidad > 99 ? '99+' : cantidad}
                    </span>
                )}
            </Link>
        </div>
    )
}