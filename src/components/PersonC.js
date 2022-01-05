import React from 'react'
import {UserConsumer} from '../context/Context';

function PersonC(props) {
    console.log('PersonC',props);
    return (
        <div>
            <UserConsumer>
                {
                    (userData)=>{
                        return(
                            <h2 style={{color:'blue'}}>Data from context:{userData}</h2>
                        );
                    }
                }
            </UserConsumer>
            <h2 style={{color:'red'}}>Data from props drilling:{props.uname}</h2>
        </div>
    );
}

export default PersonC
