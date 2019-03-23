import React from 'react';
import MovieList from './movieList.jsx';
import Search from './search.jsx';

const defaultVideoList = [
 {title: 'Mean Girls'},
 {title: 'Hackers'},
 {title: 'The Grey'},
 {title: 'Sunshine'},
 {title: 'Ex Machina'}
]

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    videos: defaultVideoList,
    searchVideos: defaultVideoList
   }
 }

 search(input){
  this.setState({
   videos: this.state.videos.filter(x=> x.title.includes(input))
  })
 }

 render(){
  return (
   <div>
     <Search search={this.search.bind(this)}/>
     <MovieList videos={this.state.videos}/>
   </div>
  )
 }
}

export default App