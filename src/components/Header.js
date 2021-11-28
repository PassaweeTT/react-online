import React from 'react'
import Logo from './Logo'

const header = () => {

    let companyName = "TNI"
    
    const showMessage = () => {
        return companyName + ".com"
    }

    const inslogin = true;

    const showMe = () =>{
        alert("Hello React")
    }

    const proDucts = [
        {id:1, name:"Coke"},
        {id:2, name:"Pepsi"}
    ]

    return (
        <div>
            
            <h1>Hello {showMessage()} </h1>
           {companyName}
           {showMessage()}

           {
               inslogin && (
               <>
               <p>Welcome </p>
               <p>Student</p>
               </>
               ) 
           }

           {inslogin ? <Logo/> : <p>Unlock</p>} 
           <button onClick={showMe}>Click Me</button>
           <ul>
           {
               proDucts.map((product,index) => {
                   return(<li key={index}>{product.name}</li>)
               })
           }
           </ul>

            <hr></hr>
        </div>
    )
}

export default header
