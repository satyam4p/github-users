import React,{ useEffect, useState} from 'react';
import LoginComponent from './loginComponent';
import Card from './card';
import SortingToolbar from './sortingComponent';
const Container = ()=>{

    return(
        <div>
            <LoginComponent/>
            <SortingToolbar/>
            <Card/>
        </div>
    )


}

export default Container;