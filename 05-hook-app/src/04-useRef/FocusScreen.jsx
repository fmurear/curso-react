export const FocusScreen = () => {
    const inputRef = useRef();

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button className="btn btn-primary mt-2">
                Set focus
            </button>
        </>
  )
}
