import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../API/unsplash";
import ImageList from "./imagesList";
class App extends React.Component {
    state = {images: [] };
 onSearchSubmit = async term =>{
    const response = await unsplash.get('/search/photos', {
        params: { query: term },
        
    });
     //then((response) => {
       // console.log(response.data);
    //});
    console.log(response);
    console.log(this.state.images)
    this.setState({
    
        images: response.data.results
    });
}
    render(){

        return (
            <div className="ui container" style={{marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit}   />
                {/* Found: {this.state.images.length} images */}
                <ImageList images={this.state.images}/>
            </div>
          
        );
    }
    
   
}

export default App;