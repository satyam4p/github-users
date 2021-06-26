import React,{ useState, useContext } from 'react';
import MainContext from '../context/mainContext';
const useSorting =(config=null)=>{
    const [sortingConfig, setSortingConfig] = useState(config);
    const { users, setUsers }  = useContext(MainContext);
   
     let usersToSort = React.useMemo(()=>{
         if(users && users.length > 0){
            let userArr = [...users]; 
            users.sort((a,b)=>{
                if(sortingConfig!==null){
                    if(a[sortingConfig.key] > b[sortingConfig.key]){
                        return sortingConfig.direction === "ascending" ? -1 : 1;
                    }
                    if(a[sortingConfig.key] < b[sortingConfig.key]){
                        return sortingConfig.direction === "ascending" ? 1 : -1;
                    }
                    if(a[sortingConfig.key] > b[sortingConfig.key]){
                        return sortingConfig.direction === "descending" ? -1 : 1;
                    }
                    if(a[sortingConfig.key] < b[sortingConfig.key]){
                        return sortingConfig.direction === "descending" ? 1 : -1;
                    }
                }
                return 0;
            })
            return userArr;
         }
        },[users,sortingConfig]);
        
    const requestSort=(key)=>{
        console.log("sortingConfig:",sortingConfig);
        if(users.length > 0){
            let direction = "ascending";
            if(sortingConfig && sortingConfig.key === key && sortingConfig.direction === "ascending"){
                direction = "descending";
            }
        setSortingConfig({key,direction});
        setUsers(usersToSort);
        }
    }

    return{
        usersToSort,
        requestSort,
        sortingConfig
    }
}


export default useSorting;