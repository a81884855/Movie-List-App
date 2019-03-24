import React from 'react';

class WachtedMovieList extends React.Component {
 constructor(props) {
   super(props);
   this.state = {}
 }

 toWatchClick(e){
  console.log(e.target.id)
  this.props.watched(e.target.id);
}

 render(){
  return (
   <div className="movieList" id="watchedMovieList">
    {this.props.videos.map((video)=>
    <div className="movie">
     <div key={video.title} id={video.title} onClick={this.toWatchClick.bind(this)}>
     {video.title}
     </div>
     <div id="watched">Watched</div>
    </div>
    )}
   </div>
  )
 }
}

export default WachtedMovieList 