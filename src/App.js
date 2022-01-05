import logo from './logo.svg';
import './App.css';
import PersonA from './components/PersonA';
import {useState} from 'react';
import { UserProvider } from './context/Context';
import PersonD from './components/PersonD';
import {LoginProvider} from './context/loginContext';

function App() {

  const[uname, setuname]=useState('Hello');

  let getDataFromD=(data)=>{
    console.log(data);
  }

  const logoutUser=()=>{
    setloginData({
      ...loginData,
      login:false
    })
  }

  const[loginData, setloginData] = useState({
    login:true,
    userName:'John',
    logoutUser:logoutUser,
    getDataFromD:getDataFromD
  });

  let updateUser=()=>{
    setloginData({
      ...loginData,
      userName:"Akshitha",
    })
  }

  return (
    <div className="App">

      <UserProvider value={uname}>

      <PersonA uname={uname}/>
      <button onClick={()=>{setuname('Hi');
    }}>update Message</button>

    <button onClick={updateUser}>Update Customer</button>
    
    </UserProvider>

    <LoginProvider value={loginData}>
      <PersonD/>
    </LoginProvider>
    </div>
  );
}

export default App;
