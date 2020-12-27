import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/*Function Based Component
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position), //successfull callback
    (err) => console.log(err) //failure callback
  );
  return <div>Latitude : </div>;
};
*/

//Class Based Component
class App extends React.Component {
  //Good place to do one time setup in constructor
  /*
  constructor(props) {
    super(props); ///first call super, it is must

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: '' }; //initialize state

    console.log('constructor');
  }
  */

  //another way to initialize state
  //if we do like this we dont need constructor and it is just one line
  state = { lat: null, errorMessage: '' };

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      //return <div>Latitude : {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner />;
  }

  //React says we have to define render!!
  render() {
    console.log('render');
    /*
    return (
      <div>
        Latitude : {this.state.lat}
        <br />
        Error : {this.state.errorMessage}
      </div>
    );*/

    return <div className="border red">{this.renderContent()}</div>;
  }

  //this method is called one time
  //Good place to do one time data loading
  componentDidMount() {
    console.log('componentDidMount');

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState!!!!
        this.setState({ lat: position.coords.latitude });
      }, //console.log(position), //successfull callback
      (err) => {
        this.setState({ errorMessage: err.message });
      } //console.log(err) //failure callback
    );
  }

  //Good place to do more data loading when state/props change
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  //Good place to do cleanup(especially for non-React stuff)
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
