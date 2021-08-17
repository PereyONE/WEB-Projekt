import React from 'react'



function CheckBox({label, value, onChange}) {
    return (
        <div>

            <label>
                <input type="checkbox" checked={value} onChange={onChange} style={{ margin: '5px' }} />
                {label}
            </label>

        </div>
    )
}

export default CheckBox
