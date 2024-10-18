import React from "react";

export const BuyList=({items})=>{
    return (
        <ul>
            {items.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    );     
}