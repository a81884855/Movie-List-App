import React from 'react';

class MovieList extends React.Component {
 constructor(props) {
   super(props);
   this.state = {}
 }
 render(){
  return (
   <div>{this.props.video.title}</div>
  )
 }
}

export default MovieList 