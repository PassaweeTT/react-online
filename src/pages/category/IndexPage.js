import React from "react";
import { Table, Spinner, Button } from "react-bootstrap";
import axios from "axios";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import { ToastProvider, useToasts } from 'react-toast-notifications';

const IndexPage = () => {
  const [Category, setCategory] = React.useState([]);
  const [loading, setLoading] = React.useState([false]);
  const [error, setError] = React.useState();
  const history = useHistory();
  const { addToast } = useToasts()

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/category"
      );
      setCategory(resp.data);
    } catch (error) {
      setError(error);
      //console.log(error.response)
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API,please try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <Button
            variant="success"
            className="mb-3"
            onClick={() => {
              history.push("/category/create");
            }}
          >
            + Add New Category
          </Button>
          <h2>Category</h2>
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
                      <Button variant="outline-primary" onClick={() => history.push('/category/edit/' + c.id)}>Edit 
                      <BsFillPencilFill className="mr-1" />
                      </Button>
                      <Button
                        className="ml-2"
                        variant="outline-danger"
                        onClick={async () => {
                          const isConfirm = window.confirm(
                            "Confirm to delete >> " + c.name + " ?"
                          );
                          if (isConfirm === true) {
                            try {
                              const resp = await axios.delete(
                                `https://api.codingthailand.com/api/category/${c.id}`
                              );
                              //alert(resp.data.message);
                              addToast(resp.data.message , {appearance: 'success', autoDismiss: true})
                              //history.go(0);
                            } catch (error) {
                              alert(error);
                            }
                          }
                        }}
                      >
                        Delete <BsFillTrashFill className="mr-1" color="red" />
                      </Button>
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
};

export default IndexPage;
