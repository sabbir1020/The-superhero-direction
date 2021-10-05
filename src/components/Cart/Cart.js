import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    let total = 0;
    for(const person of cart){
        total =(total + parseFloat(person.salari));
        
    }

    return (
        <div className='cart-container'>
            <h2>Total Person:{cart.length}</h2>
            <p> Total Salaries:{total}</p>
            <ul>
                {
                    cart.map(person=> <li>{person.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;