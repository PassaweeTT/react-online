import React from 'react'

const header = () => {

    let companyName = "TNI"
    
    const showMessage = () => {
        return companyName + ".com"
    }

    return (
        <div>
            
            <h1>Hello {showMessage()} </h1>
           

            <hr></hr>
        </div>
    )
}

export default header
