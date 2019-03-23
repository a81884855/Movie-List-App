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
    currentVideos: defaultVideoList
   }
 }

 search(input){
  let searchResult = this.state.currentVideos.filter(x=> x.title.toLowerCase().includes(input.toLowerCase()))
  this.setState({
   videos: searchResult.length > 0 ? searchResult : [{title: "no movie by that name found"}]
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