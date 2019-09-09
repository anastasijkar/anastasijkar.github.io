import React, { Component } from 'react';
import './App.scss';
import 'reset-css';

import Landing from './components/Landing';
import Employment from './components/Employment';
import EmploymentSm from './components/EmploymentSm';
import Skills from './components/Skills';
import Works from './components/Works';
import Personal from './components/Personal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sm: undefined
    };
  }

  onResize = () => {
    let prevSm = this.state.sm;

    this.setState({
      sm: window.innerWidth <= 860
    }, () => {
      if (this.state.sm !== prevSm) {
        console.log('breakpoint');
      }
    })
  }

  componentWillMount () {
    this.onResize();

    window.addEventListener('resize', this.onResize, false)
  }

  render () {
    return (
      <div className="App">
        <Landing />
        { this.state.sm ? <EmploymentSm /> : <Employment /> }
        <Skills />
        <Works />
        <Personal />
      </div>
    );
  }
}

export default App;
