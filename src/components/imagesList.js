import React from "react";


const ImageList = props =>{

//console.log(props.images);

 const images= props.images.map((e)=>{
    return (   
     
    <div className="four wide column">
            
    <div class="ui fluid purple card">
      <div class="image">
      <img  className ="ui rounded image"alt={e.description} key={e.id} src={e.urls.regular}/>
      </div>
      
      </div>
               
                
                
            </div>
           
 
    )
});

return <div className="ui grid ">{images}</div>;
 
    
}

export default ImageList;