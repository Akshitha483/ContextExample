import React from 'react'
import PersonC from './PersonC'

function PersonB(props) {
   
        console.log('PersonB',props);
        return (
            <div>
                <PersonC uname={props.uname}/>
            </div>
    )
}

export default PersonB
