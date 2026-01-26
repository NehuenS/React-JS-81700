import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function Button(clickHandler, label, classes) {
    return (
        <>
            <button className={classes} onClick={clickHandler ?? false}>{label ?? ""}</button>
        </>
    )
}

export default Button;