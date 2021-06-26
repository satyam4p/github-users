import React,{ useContext } from 'react';
import MainContext from '../context/mainContext';
import '../styles/loginComponent.css';

const LoginComponent =()=>{

    const { users, setUsers, setError} = useContext(MainContext);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const userName = e.target.userName.value;
        const url = `https://api.github.com/users/${userName}`;
        let data = await fetch(url).then(res=>{
            return res.json();
        }).catch(error=>{
            setError("No internet Access:",error);
        })
        if(data.message){
            setError("An error occured while fetching user");
        }else{
            let usersArr=[];
            if(users.length > 0){
                usersArr = [...users];
                let user = usersArr.find(user=>{
                    return user.id === data.id;
                })
                if(!user){
                    usersArr.push(data);
                    setUsers(usersArr);
                    setError(null);
                }else{
                    setError("User already exists!");
                }
            }else{
                usersArr.push(data);
                setUsers(usersArr);
                setError(null);
            }
        }
    }
    return(
        <div className="login-container">
            <form onSubmit={e=>handleSubmit(e)}>
                <input className="login-input" type="text" name="userName" placeholder="Github Login"/>
                <button type="submit" className="login-btn" >ADD</button>
            </form>
        </div>
    )


}

export default LoginComponent;