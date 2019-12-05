import React from 'react'

export const Card = ({el}) => {
    return (
        <div className="single-container blue-tag">
            <div className="table-element ruta">
                <h6>Ruta</h6>
                <p>{el.route_id}</p>
            </div>
    
            <div className="table-element conductor">
                <h6>Conductor</h6>
                <p>José Luis Cepeda</p>
            </div>
    
            <div className="table-element creada">
                <h6>Creada</h6>
                <p>1 de Enero del 2019</p>
            </div>
            
            <div className="table-element hora">
                <h6>Inició</h6>
                <p>13:30</p>
            </div>
    
            <div className="table-element hora">
                <h6>Terminó</h6>
                <p>{el.completed_at}</p>
            </div>
    
            <div className="table-element entrega">
                <h6>Entregas</h6>
                <p>{el.deliveries}</p>
            </div>
    
            <div className="table-element status">
                <span className={el.status === "onroute" ? "blue-span" : "green-span"}>{el.status}</span>
            </div>
        </div>
    )
}
