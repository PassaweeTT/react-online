import React from 'react'
import { Card, Button } from "react-bootstrap"
import { BsGithub } from "react-icons/bs";
const Contactus = () => {
    return (
        <div className="container">
            <div>
                <Card>
                    <Card.Header >Contactus</Card.Header>
                    <Card.Body>
                        <Card.Title>Passawee Wanwilai</Card.Title>
                        <Card.Text>
                            Hello it's me "Tan" . Nice to meet you !
                            <ul className="mt-2">
                                <li className="mt-2" >
                                    I am studying at Thai-Nichi Institute of Technology. 
                                </li>
                                <li className="mt-2" >I like to play games</li>
                                <li className="mt-2" >I Love to listen Music !</li>
                                <li className="mt-2" >
                                    I wish in the future I gonna be rich !
                                </li>
                            </ul>
                        </Card.Text>
                        <Button href='https://github.com/PassaweeTT' variant="outline-secondary"><BsGithub color="outline-info" size="2em" /> Click here</Button>
                        <br />
                        <br />
                        <b>Contact Me</b> : wa.passawee_st@tni.ac.th
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Contactus
