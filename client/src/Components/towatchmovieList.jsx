import React from 'react';

class ToWatchMovieList extends React.Component {
 constructor(props) {
   super(props);
   this.state = {}
 }

 watchedClick(e){
   console.log(e.target.id)
   this.props.watched(e.target.id);
 }

 render(){
  return (
   <div className="movieList" id="toWatchMovieList">
    {this.props.videos.map((video)=>
    <div key={video.title} className="movie" id={video.title} onClick={this.watchedClick.bind(this)}>{video.title}</div>)}
   </div>
  )
 }
}

export default ToWatchMovieList 