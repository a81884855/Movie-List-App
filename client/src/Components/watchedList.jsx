import React from 'react';

class WachtedMovieList extends React.Component {
 constructor(props) {
   super(props);
   this.state = {}
 }
 render(){
  return (
   <div className="movieList">
    {this.props.videos.map((video)=>
    <div key={video.title} className="movie">{video.title}</div>)}
   </div>
  )
 }
}

export default WachtedMovieList 