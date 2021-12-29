import React from 'react'
import Button from '../styles/button/Button'
import Title from '../styles/title/Title'
import Logo from './Logo'

const Header = () => {
    let companyName = "TNI"


    const showMessage = () => {

        return companyName + ".com"

    }
    
    const isLogin = false;

    const showMe = () =>{
        alert('Hello React')

    }
    const products = [
        {id: 1, name:"Coke"},
        {id: 2, name:"Pepsi"}
    ]


    

    return (
        <div>
            <Title>Project React</Title>
            <h1>Hello {showMessage()}</h1>

           {
                isLogin === true ? (<div>
                <p>Welcome</p>
                <p>Student</p> 
                </div>
                    ) : (<>
                        <p>Welcome</p>
                        <p>Teacher</p> 
                        </>
                    )

            }

            { isLogin ? <Logo/> : <p>Unlock</p>} 

         <button onClick = {showMe}>Click Me</button>
         <Button keyword ="correct" onClick = {showMe}>Click Me</Button>
         <Button keyword ="no" onClick = {showMe}>Click Me</Button>

          <ul>
           { products.map((product,index)=> {
               return (<li key = {index}>{index+1} {product.name}</li>)
           })
           }
          </ul>

            <hr/>
        </div>
    )
}

export default Header
