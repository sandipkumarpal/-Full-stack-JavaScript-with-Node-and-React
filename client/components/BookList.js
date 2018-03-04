import React from 'react';
import Book from './Book';

const BookList = (props) => {
    return (
        <div>
            {props.books.map(book => <Book key={book.id} {...book} onClicked={props.onBookClicked} />)}
        </div>
    );
}

export default BookList;
