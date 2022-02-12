import React from 'react'
import { Table} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'


const CartPage = () => {

    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)

    const dispath = useDispatch()

  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 mt-4">
            <h2>Cart pages</h2>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Produce ID</th>
                <th>Produce Name</th>
                <th>Produce Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
            {
                    cart.map((p,index)=>{
                        return(
                            <tr key={p.id}>
                                <td>{index+1}</td>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.qty}</td>
                                <td>{p.qty*p.price}</td>

                            </tr>

                        )
                    })
                }

            </tbody>
          </Table>
        </div>
    </div>
</div>
  )
}

export default CartPage