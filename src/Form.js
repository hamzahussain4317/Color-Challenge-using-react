
const form = ({ color, setColor }) => {
    return (
        <div className="form">
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder='Add color Name'
                required
                onChange={(e) => setColor(e.target.value)
                }

            />
        </div>
    )
}

export default form