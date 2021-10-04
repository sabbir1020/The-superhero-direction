import React from 'react';
import './Person.css'

const Person = (props) => {
    // console.log(props.person)
    const {name,img,age,contain,country,salari}=props.person;
    return (
  <div className=''>           
         <div class="">
            <div class="col">
                <div class="card">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Name:{name}</h5>
                    <h5 class="card-title">Age:{age}</h5>
                    <h5 class="card-title">Content:{contain}</h5>
                    <h5 class="card-title">Salari:{salari}</h5>
                    <h5 class="card-title">Country:{country}</h5>
                    <button 
                    onClick={()=>props.handleAddPerson(props.person)}
                    >Add To Add</button>
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