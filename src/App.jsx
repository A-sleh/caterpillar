

import './assets/all.min.css'
import React from 'react';

export default function App() {

    const [name,setName] = React.useState('Yes') ;
    
    function clickHandler() {
        setName( preName => ( preName === 'Yes' ? 'No' : 'Yes') ) ;
    }
    return(
        <p style={{fontSize: '30px' , textAlign: 'center' }} onClick={clickHandler}>{name}</p>
    )
};