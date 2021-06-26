import React,{ useContext } from 'react';
import MainContext from '../context/mainContext';
import '../styles/card.css';


const Card =()=>{
    
    const { users, setUsers } = useContext(MainContext);

    const handleDelete=(e,id)=>{
        let usersArr = [...users];
        const userIndex = users.findIndex(user=>user.id === id);
        usersArr.splice(userIndex,1);
        setUsers(usersArr);
    }
    return(
        <div className="card main-card">
            { users.length > 0 && users.map((user,index)=>{
            return(
                <div key={index} className="card-content">
                    <span className="tooltip-text">{user.bio ? user.bio : "No bio"}</span>
                    <div className="card--delete" onClick={e=>handleDelete(e,user.id)}>
                        X
                    </div>
                    <a className="user-link"href={user.html_url} target="_blank" rel="noopener noreferrer" >
                    <div className="card-content--image">
                        <img src={user.avatar_url} alt="user profile"/>
                    </div>
                    <div className="card-main-details">
                        <p>
                            {user.name}
                        </p>
                        <p>
                            Location: {user.location}
                        </p>
                        <p>
                            Followers: {user.followers}
                        </p>
                    </div>
                    </a>
                </div>
                )
            })}
            
        </div>
    )
}

export default Card;