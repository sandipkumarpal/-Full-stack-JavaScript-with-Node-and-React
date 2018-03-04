import React from 'react';
const Book = (props) => {
    return (
        <div onClick={() => props.onClicked(props.id)}>
            <div>{props.userId}</div>
            <div>{props.id}</div>
            <div>{props.title}</div>
            <div>{props.completed}</div>
        </div>
    );
}

export default Book;
