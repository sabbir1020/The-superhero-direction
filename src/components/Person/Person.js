import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    // console.log(props.person)
    const {name,img,age,contain,country,salari}=props.person;
    const element = <FontAwesomeIcon icon={faCoffee , faShoppingCart} />
    return (
  <div className=''>           
         <div className="">
            <div className="col">
                <div className="card">
                <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <h5 className="card-title">Age:{age}</h5>
                    <h5 className="card-title">Content:{contain}</h5>
                    <h5 className="card-salari">Salari:{salari}</h5>
                    <h5 className="card-title">Country:{country}</h5>
                    <button className="btn-regula"
                    onClick={()=>props.handleAddPerson(props.person)}
                    > {element}Add To Cart</button>
                    
                </div>
                </div>
            </div>
       </div> 
    </div>
    );
};

export default Person;


//  {/* <h2>Name:{name}</h2>
//             <h2>Name:{age}</h2>
//             <h2>Name:{country}</h2> */}