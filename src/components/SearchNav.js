import React from 'react';

import {
    ExpandSearchContainer as ExpandSearchContainer
} from './SearchNavStyle'


export const SearchNav = ({closeInput}) =>{
    return (
        <ExpandSearchContainer onClick={()=>closeInput(false)}>
            Expanded Navigation Bar
        </ExpandSearchContainer>
    )
}