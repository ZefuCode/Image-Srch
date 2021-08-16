import React from "react";

class SearchBar extends React.Component {
    
    state = { term: ""};
    
    //submit handeler
    onFormSubmit = (event) =>{
         event.preventDefault();
         this.props.onSubmit(this.state.term);
    } 
    //onInputChange(event){

      //  event.target.value
        //this.setState({

        //}) 

    
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form "> 
                <div className="ui field">
                <label >Image Search</label>
                <input type="text" value={ this.state.term} onChange={e => this.setState({ term: e.target.value})} className="ui"></input>    
                    {/* <input type="text" onChange={this.onInputChange} className="ui input"></input> */}
                </div>
                </form>  
            </div>
        );
        
    }
}

export default SearchBar;