import React from "react";

class SearchBar extends React.Component{
    state = { term: '' }
    
    onInputChange = (event) => {
        this.setState({term: event.target.value})
        // console.log(this.state.term);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        // Make sure to use a callback to inform the parent component that the user has submitted the form
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label style={{color: 'red', width: '4em'}}>सस्ता YouTube</label>
                        <input type="text"
                            onChange={this.onInputChange} 
                            value={this.state.term}
                            />
                    </div>
                </form>    
            </div>
        )
    }
}

export default SearchBar;