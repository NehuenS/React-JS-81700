import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function Button(clickHandler, label, classes) {
    return (
        <>
            <button class={classes} onClick={clickHandler}>{label}</button>
        </>
    )
}

export default Button;