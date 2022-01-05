import React from 'react'
import PersonB from './PersonB';

function PersonA(props) {
    console.log('PersonA',props);
    return (
        <div>
            <PersonB uname={props.uname}/>
        </div>
    )
}

export default PersonA
