import React from 'react'
import Button from '../styles/button/Button'
import Title from '../styles/title/Title'
import Logo from './Logo'

const Header = () => {

    let companyName = "TNI"
    const companyAddress = <p>Bangkok</p>
    let number = 10

    const showMessage = () => {
        return companyName + ".com"
    }

    const isLogin = false;

    const showMe = () => {
        alert('Hello react')
    }

    const products = [
        {id: 1, name: "Coke"},
        {id: 2, name: "Pepsi"}
    ]

    return (
        <div>
            <Title>Project React</Title>
            <h1>Hello {companyName}</h1>
            {companyAddress}
            {number * 2}
            {showMessage()}

            {
                isLogin === true ? (
                    <>
                        <p>Welcome</p>
                        <p>Student</p>
                    </>
                ) : (
                    <>
                        <p>Welcome</p>
                        <p>Teacher</p>
                    </>
                )
            }

            { isLogin ? <Logo /> : <p>Unlock</p> }

            <button onClick={showMe}>Click me!</button>
            <Button onClick={showMe}>
                Click me!
            </Button>

            <ul>
            {
                products.map((product,index) => {
                    return (<li key={index}>{index+1} {product.name}</li>)
                })
            }
            </ul>

            <hr />
        </div>
    )
}

export default Header
