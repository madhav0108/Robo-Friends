import React from 'react';
import Card from './Card.js';

const CardList = ({robots}) => {
    const cardArr = robots.map((user, i) => {
        return (
        <Card key={i.id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
        />);
    })
    return (
        <div>
            {cardArr}
        </div>
    );
}

export default CardList;