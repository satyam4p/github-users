import React from 'react';
import userSorting from '../hooks/useSorting';
import '../styles/sortingComponent.css';

const SortingToolbar=()=>{
    const { requestSort } = userSorting();
 

    return(
        <div>
            <div className="sorting-container">
                <p className="sorting-title">
                    Sort By
                </p>
                <ul className="sorting-list">
                    <li onClick={e=>requestSort("name")}className="sorting-type">
                        Name
                    </li>
                    <li onClick = {e=>requestSort("location")} className="sorting-type">
                        Location
                    </li>
                    <li onClick = {e=>requestSort("followers")} className="sorting-type">
                        Followers
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SortingToolbar;