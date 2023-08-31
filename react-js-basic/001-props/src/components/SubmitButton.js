import React from 'react'

const SubmitButton = ({ buttonName, onClick }) => {
    return (
        <div className='btn'>
            <button style={{padding:'10px 20px'}}onClick={onClick}>{buttonName}</button>
        </div>
    )
}

export default SubmitButton