
export default function Boton(props) {
    return (
        <button className={props.clases} onClick={props.clickHandler}>{props.etiqueta}</button>
    )
}
