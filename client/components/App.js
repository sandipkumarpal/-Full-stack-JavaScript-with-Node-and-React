import React from 'react';
import axios from 'axios';
import BookList from './BookList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            books : this.props.initialData,
            ratings : {}
        }
        this.fetchRatingForBook = this.fetchRatingForBook.bind(this);
    }

    fetchRatingForBook(BookId) {
        if(this.state.ratings[BookId]) {return;}
        axios.get(`https://jsonplaceholder.typicode.com/todos/${BookId}`)
            .then(resp => {
                this.setState((prevState) => {
                    const currentRatting = prevState.ratings;
                    currentRatting[BookId] = resp.data;
                    return {ratings: currentRatting};
                });
            });
        console.log(BookId);
    }

    render() {
        return (
            <div>
                <BookList books={this.state.books} onBookClicked={this.fetchRatingForBook}/>
            </div>
        );
    }
}

export default App;
