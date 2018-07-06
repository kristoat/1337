import React, { Component } from 'react';
import moment from 'moment';
import './Leet.css';

class Leet extends Component {
  state = {
    currentTime: '',
    leet: false,
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer());
  }

  checkLeetNess = currentTime => {
    const time = currentTime.split(':');
    const hh = 0;
    const mm = 1;

    return (time[hh] === '13' && time[mm] === '37');
  };

  tick = () => {
    const currentTime = moment().format('HH:mm:ss');
    const leet = this.checkLeetNess(currentTime);
    this.setState({ currentTime, leet })
  };

  render() {
    return (
      <div className="leet">
        <header className="leet-header">
          <h1 className="leet-title">{this.state.currentTime}</h1>
        </header>
        {this.state.leet && (
          <div className="leet-container">
            <h1 className="super-fast-spin">1337</h1>
            <h1 className="super-fast-spin">1337</h1>
            <h1 className="super-fast-spin">1337</h1>
            <h1 className="super-fast-spin">1337</h1>
            <h1 className="super-fast-spin">1337</h1>
            <h1 className="super-fast-spin">1337</h1>
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292" alt="oh boy"/>
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292" alt="oh boy"/>
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292" alt="oh boy"/>
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292" alt="oh boy"/>
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292" alt="oh boy"/>
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292" alt="oh boy"/>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>            
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Leet;
