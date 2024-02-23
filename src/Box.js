const box = ({ color }) => {
    return (
        <div className="box"
            style={{
                backgroundColor: color
            }}
        >
            <p className="boxpara">{(color === '') ? 'Empty Value' : color}
            </p>
        </div>
    )
}

export default box