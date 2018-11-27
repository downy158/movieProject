import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f89a610528986bc2a8308cb7d7a7f01e&targetDt=20120101')
      .then(response => response.json())
      .then(movies => console.log(movies))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Movie />
      </div>
    );
  }
}

export default App;
