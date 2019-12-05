import React, { Component } from 'react'
import { Card } from './Card'
import socket from '../../services/websocket'

export default class Home extends Component {
    state = {
        routes: [
            {route_id:1,status:"onroute",deliveries:0,completed_at:""},
            {route_id:2,status:"onroute",deliveries:0,completed_at:""}, 
            {route_id:3,status:"onroute",deliveries:0,completed_at:""},
            {route_id:4,status:"onroute",deliveries:0,completed_at:""},
            {route_id:5,status:"completed",deliveries:0,completed_at:"2019-12-05T16:37:14Z"},
        ]
    }

    componentDidMount(){
        this.updateSocket()
    }

    updateSocket = () => {
        socket.onmessage = (event) => {

            for (let i in this.state.routes){

                console.log(JSON.parse(event.data))
                
                if(this.state.routes[i].route_id === JSON.parse(event.data).route_id){
                    this.setState(prevState => (
                        {
                            ...prevState,
                            [prevState.routes[i]]: JSON.parse(event.data)
                        }
                    ))
                    break;
                }
            }
        };
    }

    tableDrawer = () => {
        return this.state.routes.map(el => <Card el={el} key={el.route_id} />)
    }

    render() {
        return (
            <div className="container">
                {this.tableDrawer()}
            </div>
        )
    }
}
