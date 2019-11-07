import React from 'react';
import ListItem from './components/ListItem';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentString: "",
      clickedStrings: []
    };
  }

  addStringFromClicked = e => {
    this.setState({
      clickedStrings: this.state.clickedStrings.concat(this.state.currentString)
    });
  }

  handleChange = e => {
    this.setState({
      currentString: e.target.value
    });
  }

  handleDelete = str => {
    this.setState({
      clickedStrings: this.state.clickedStrings.filter(string => string !== str)
    })
  }

  render() {
    const { strings } = this.props;
    const { currentString, clickedStrings } = this.state;
    const options = strings.map((str, i) => <option key={`option${i}`} value={str}>{str}</option>);
    options.unshift(<option value={""}></option>)

    let clickedStringsListItems = null;
    if (clickedStrings.length > 0) {
      clickedStringsListItems = clickedStrings.map((string, i) => (
        <ListItem
          key={`ListItem${i}`}
          text={string}
          handleDelete={this.handleDelete.bind(this, string)}
        />
      ));
    }

    let addStringButton = <button className="add-string-disabled" onClick={() => {return;}}>Add to list</button>
    if (currentString) {
      addStringButton = <button className="add-string-enabled" onClick={this.addStringFromClicked}>Add to list</button>
    }

    return (
      <div className="App">
        <select className="strings-dropdown" onChange={this.handleChange}>
          {options}
        </select>
        <div className="add-string">
          {addStringButton}
        </div>
        <div className="results">
          <ul>
            {clickedStringsListItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
