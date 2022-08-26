function ActualDate() {
    let today = new Date()
    let actualyear = today.getFullYear()

    return (
        <p className="Footer-p">MyTinerary | {actualyear}</p>
    )
}
export default ActualDate