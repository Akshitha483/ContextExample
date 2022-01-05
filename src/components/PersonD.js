import React, {useContext} from "react";
import LoginContext from '../context/loginContext';


function PersonD() {

    let context = useContext(LoginContext)
    console.log('context',context);


    let logout=()=>{
        context.logoutUser()
    }

    let sendData=()=>{
        context.getDataFromD("Data from Person A")
    }
    return (
        <div>
            {context.login ? <p>{context.userName} is available</p>:
            <p>Please reply...!</p>}
            <button onClick={logout}>leave</button>
            <button onClick={sendData}>Data sent to App component</button>
        </div>
    )
}

export default PersonD
