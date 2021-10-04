import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Pages.css'

const Pages = () => {
    const [persons,setPorsons] = useState([])
    const [cart,setCart] = useState([])

    const handleAddPerson = (person)=>{ 

        const newCart =[...cart,person]
      
        setCart(newCart)
        console.log(newCart)

    }
    useEffect( ()=>{
        fetch('Youtuber.JSON')
        .then(res=>res.json())
        .then(data=>setPorsons(data))
    },[])
    return (
        <div className ='pages-container'>
            <div className ='cols-md-9' >
              
             <div className='row row-cols-1 row-cols-md-3 g-4'>
                 
                    {
                        persons.map( person=>
                        <Person person={person}
                        handleAddPerson={handleAddPerson}
                        ></Person>)
                    }
             </div>
               
            </div>
           <div className='cols-md-3'>
              <Cart
              cart={cart}
              ></Cart>
           </div>
        </div>
    );
};

export default Pages;