import React from 'react'

function CartItems(props)
{
    let index = 0;
    const cartItems = props.cartList.map(a => 
    {
        index++;
        return <div style={{margin: "1%", background: "rgb(80, 22, 70)"}} key={a.name}>
            <img src={a.img} style={{display: "inline", verticalAlign: "middle", width: "15%"}}></img>
            <h2 style={{display: "inline", verticalAlign: "middle"}}> {a.name} </h2>
            <pre style={{display: "inline", verticalAlign: "middle"}}>       </pre>
            <h4 style={{display: "inline", verticalAlign: "middle"}}> {a.price} </h4>
            <pre style={{display: "inline", verticalAlign: "middle"}}>       </pre>
        </div>
    })
    return cartItems
}

export default CartItems