import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/movie/:imdbID" component={MovieDetail}/>
          <Route component={PageNotFound} />
        </Routes>
          
          <Footer />
      </Router>
    </div>
  );
}

export default App;
