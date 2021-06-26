import React,{ useContext } from 'react';
import Container from '../components/container';
import MainContext from '../context/mainContext';


const Main =()=>{
    const { users, setUsers, error, setError } = useContext(MainContext);
    console.log(users);
    console.log(error);
    return(
        <div style={{padding:"20px"}}>
            <Container/>
        </div>
    )
}

export default Main;