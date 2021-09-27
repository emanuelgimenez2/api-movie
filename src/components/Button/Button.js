import React from "react"
import Button from 'react-bootstrap/Button';


export default function BarraB({setFilter}){
        const botones = [
                {name:"accion", filter:"Action", variant:"btn-outline-primary"},
                {name:"Thriller", filter:"Thriller", variant:"btn-outline-primary"},
                {name:"Terror", filter:"Horror", variant:"btn-outline-primary"},
                {name:"Comedia", filter:"Comedy", variant:"btn-outline-primary"},
                {name:"Ciencia-ficcion", filter:"Science-Fiction", variant:"btn-outline-primary"},
                {name:"Drama", filter:"Drama", variant:"btn-outline-primary"},
        ];

return (
        <div>
                {botones.map(boton => <button  onClick={() => setFilter(boton.filter)} type="button"  className={`btn ${boton.variant}`}>{boton.name}</button>)}
        </div>
       //
)
}