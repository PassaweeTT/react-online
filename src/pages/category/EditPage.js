import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastProvider, useToasts } from 'react-toast-notifications';

const schema = yup
  .object({
    name: yup.string().required("Category news cannot ne null"),
  })
  .required();

const EditPage = () => {
  const { register,handleSubmit,formState: { errors },setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const { id } = useParams();
  const { addToast } = useToasts()


  const getData = async (id) => {
    const resp = await axios.get(
      "https://api.codingthailand.com/api/category/" + id
    );
    setValue('name',resp.data.name);
  };


  const onSubmit = async (data) => {
    try {
      //console.log(data)
      const apiURL = "https://api.codingthailand.com/api/category";
      const resp = await axios.put(apiURL, 
        {
            id: id,
            name: data.name,
        });
      //alert(resp.data.message);
      addToast(resp.data.message , {appearance: 'success', autoDismiss: true})
      history.replace('/category');
    } catch (error) {
        console.log(error.response)
    }
  };

  React.useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Edit Category</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category News</Form.Label>
              <Form.Control
                type="text"
                name="name"
                ref={register}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  {errors.name.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
