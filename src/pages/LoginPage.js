import React from "react";
import{Form,Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import {UserStoreContext} from '../context/UserContext'

const schema = yup.object({
    email: yup.string().required('อีเมลห้ามว่าง').email('อีเมลฟอร์แมตไม่ถูกต้อง'),
    password: yup.string().required('พาสเวิร์ดห้ามว่าง').min(3,'พาสเวิร์ดห้ามต่ำกว่า 3 ตัวอักษร')
  }).required();

const LoginPage = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const history = useHistory();

    const {addToast} = useToasts()

    const userStore = React.useContext(UserStoreContext)

    const onSubmit = async(data) => {
        try{
            const apiURL = 'https://api.codingthailand.com/api/login'
            const resp = await axios.post(apiURL,
                {
                    email: data.email,
                    password: data.password
                }
            )
            //console.log(resp.data)

            localStorage.setItem('token',JSON.stringify(resp.data))
            // get profile
            const urlProfile = 'https://api.codingthailand.com/api/profile'
            const respProfile = await axios.get(urlProfile,{
                headers: {
                    Authorization: 'Bearer '+resp.data.access_token
                }
            })
            //console.log(respProfile.data)
            localStorage.setItem('profile',JSON.stringify(respProfile.data.data.user))

            addToast('Login successfully',{ appearance: 'success',autoDismiss: true})
            
            const profileValue = JSON.parse(localStorage.getItem('profile'))
            userStore.updateProfile(profileValue)

            history.replace('/')
            //history.go(0)

        }catch(error){
            addToast(error.response.data.message,{ appearance: 'error',autoDismiss: true})
        }
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Login</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" ref={register} 
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
              {
                  errors.email && (
                      <Form.Control.Feedback type="invalid">
                          {errors.email.message}
                      </Form.Control.Feedback>
                  )
              }
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" ref={register} 
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
              {
                  errors.password && (
                      <Form.Control.Feedback type="invalid">
                          {errors.password.message}
                      </Form.Control.Feedback>
                  )
              }
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;