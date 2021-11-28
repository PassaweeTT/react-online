import React from 'react'
import Button from '../styles/button/Button'
import Title from '../styles/title/Title'   
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

    const keyword = "correctxx" //<<False
    
    return (
        <div>
            <Title>I love React</Title>
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
           <Button onClick={showMe} keyword={keyword}> Click me</Button>
           
            
           

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
