
export default function Boton(props) {
  return (
    <button className={props.clases ?? ""} onClick={props.clickHandler ?? (() => false)}>
      {props.etiqueta ?? ""}
    </button >
  )
}
