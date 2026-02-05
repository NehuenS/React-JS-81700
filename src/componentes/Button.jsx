
export default function Button(properties) {
    return (
        <button className={properties.classes} onClick={properties.clickHandler}>{properties.label}</button>
    )
}
