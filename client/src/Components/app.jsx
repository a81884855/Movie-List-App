import React from 'react';
import MovieList from './movieList.jsx'

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    videos: [
     {title: 'Mean Girls'},
     {title: 'Hackers'},
     {title: 'The Grey'},
     {title: 'Sunshine'},
     {title: 'Ex Machina'},
   ]
   }
 }
 render(){
  return (
   <div className="movieList">
    {this.state.videos.map((video)=>
     <div className = "movie"><MovieList video={video}/></div>
    )}
   </div>
  )
 }
}

export default App