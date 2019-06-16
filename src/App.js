import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a92cd350afc148ada04bc92bdaaffe70'
});

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    app.models
      .predict(
      Clarifai.COLOR_MODEL,
          // URL
          "https://samples.clarifai.com/metro-north.jpg"
      )
      .then(function(response) {
          console.log(response);
          },
          function(err) {}// there was an error}
      );
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions} />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          {/* <FaceRecognition /> */}
  
      </div>
    );
  }
  
}

export default App;
