import React from 'react';
const Book = (props) => {
    return (
        <div>
            <div>{props.userId}</div>
            <div>{props.id}</div>
            <div>{props.title}</div>
            <div>{props.completed}</div>
        </div>
    );
}

export default Book;
