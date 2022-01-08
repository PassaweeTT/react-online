import React from 'react'
import { Table, Spinner, Button } from 'react-bootstrap';
import axios from 'axios';
import {
    BsFillTrashFill, BsFillPencilFill
} from "react-icons/bs"

const IndexPage = () => {
    const [Category, setCategory] = React.useState([])
    const [loading, setLoading] = React.useState([false])
    const [error, setError] = React.useState()


    const getData = async () => {
        try {
            setLoading(true)
            const resp = await axios.get('https://api.codingthailand.com/api/category')
            setCategory(resp.data)
        } catch (error) {
            setError(error)
            //console.log(error.response)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        getData()
    }, [])

    if (loading === true) {
        return (
            <div className='text-center mt-5'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    if (error) {
        return (
            <div className='text-center mt-5 text-danger'>
                <h4>Error from API,please try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4">
                    <h2>Index Page</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Category.map((c, index) => {
                                return (
                                    <tr key={c.id}>
                                        <td>{c.id}</td>
                                        <td>{c.name}</td>
                                        <td>
                                            <Button variant="outline-primary">Edit <BsFillPencilFill
                                                className="mr-1" /></Button>
                                            <Button className="ml-2" variant="outline-danger">Delete <BsFillTrashFill className="mr-1" color="red" /></Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;