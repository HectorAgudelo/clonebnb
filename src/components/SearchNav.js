import React from 'react';

import {
    ExpandSearchContainer,
   inputContainer
} from './SearchNavStyle'


export const SearchNav = ({closeInput}) =>{
    return (
        <ExpandSearchContainer onClick={()=>closeInput(false)}>
            
           <inputContainer></inputContainer>
        </ExpandSearchContainer>
        
    )
}