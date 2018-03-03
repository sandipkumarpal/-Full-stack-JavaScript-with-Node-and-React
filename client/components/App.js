import React from 'react';
import BookList from './BookList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            books:this.props.initialData
        }
    }
    render() {
        return (
            <div>
                <BookList books={this.state.books}/>
            </div>
        );
    }
}

export default App;
