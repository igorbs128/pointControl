import React from 'react';
import { Form, Card, Input, Dropdown, Button, Item} from "semantic-ui-react"
import { useSelector } from 'react-redux';


export default function PointRegistration (){

const stateData = useSelector(state=> state.user);

   return ( 
       <Card centered>
           <Card.Content>
                <Card.Header>Registro do Ponto</Card.Header>
                <Card.Description>
                    <Form>
                        <Form.Field>
                            <label>Nome</label>
                            <Dropdown>
                                <Dropdown.Menu>
                                    {stateData.user.map(
                                        item=> <Dropdown.Item text={item.name}/>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Field>
                        <Form.Field>
                            <Dropdown></Dropdown>
                        </Form.Field>
                    </Form>
                </Card.Description>
           </Card.Content>
       </Card>
   )}