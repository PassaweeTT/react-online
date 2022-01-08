import React from "react";
import{Form,Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const schema = yup.object({
    name: yup.string().required('Category news cannot ne null'),
  }).required();

const CreatePage = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const history = useHistory();

    const onSubmit = async(data) => {
        try{
            //console.log(data)
            const apiURL = 'https://api.codingthailand.com/api/category'
            const resp = await axios.post(apiURL,
                {
                    name : data.name
                }
            )
            alert(resp.data.message)
            history.goBack()
        }catch(error){
            alert(error)

        }
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Add New Category</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category News</Form.Label>
              <Form.Control type="text" name="name" ref={register} 
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}/>
              {
                  errors.name && (
                      <Form.Control.Feedback type="invalid">
                          {errors.name.message}
                      </Form.Control.Feedback>
                  )
              }
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;