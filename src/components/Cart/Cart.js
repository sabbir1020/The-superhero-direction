import React from 'react';

const Cart = (props) => {
    const {cart,salari}=props||{}
    return (
        <div>
            <h2>This is Cart:{cart.length}</h2>
            <h4>Salari:{salari}</h4>
            <ul>
                {
                    cart.map(person=> <li>{person.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;