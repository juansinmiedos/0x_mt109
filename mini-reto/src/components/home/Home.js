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
            this.setState(prevState => (
                {
                    ...prevState,
                    routes: [...prevState.routes, JSON.parse(event.data)]
                }
            ))
        };
    }

    tableDrawer = () => {
        console.log(this.state.routes)
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
