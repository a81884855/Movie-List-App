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
   <div className="movie-list">
    {this.state.videos.map((video)=>
     <MovieList video={video}/>
    )}
   </div>
  )
 }
}

export default App