import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      allNames: [],
      id: 1
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.addName = this.addName.bind(this);
    this.removeName = this.removeName.bind(this);
  }

  handleTextInputChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  addName = () => {
    const { name } = this.state;
    let NameObject;
    if (name != "") {
      const date = new Date(Date.now());
      NameObject = { id: this.state.id, name, created: date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() }
      this.setState({
        allNames: [...this.state.allNames, NameObject],
        name: "",
        id: this.state.id + 1
      });
    }
  }

  removeName = (id) => {
    const filtered = this.state.allNames.filter((name) => {
      return name.id != id
    })
    this.setState({ allNames: filtered });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Name List</h1>
        </header>
        <div className="content">
          <div className="add-name row">
            <h2 className="App-title">Add a new name</h2>
            <div className="add-form">
              <div className="info-label col-md-3 col-sm-3">Name</div>
              <div className="discloser-info-value col-md-7 col-sm-7">
                <input type="text" className="form-control" placeholder={"Enter Name"} maxLength={"255"} value={this.state.name} onChange={(e) => { this.handleTextInputChange(e) }} />
              </div>
              <div className="add_btn_div col-md-2 col-sm-2">
                <button id="addBtn" className="btn btn-sm btn-info no-radius " type="button" onClick={() => { this.addName(); }}>Add Name</button>
              </div>
            </div>
          </div>
          <div className="list-names">
            <h2 className="App-title">Name List</h2>
            {this.state.allNames.length > 0 &&
              <table className="list-table">
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Created On</th>
                  <th></th>
                </tr>
                {this.state.allNames.map(function (nameObj, i) {
                  return <tr>
                    <td>{nameObj.id}</td>
                    <td>{nameObj.name}</td>
                    <td>{nameObj.created}</td>
                    <td><button id="removeBtn" className="btn btn-sm btn-info no-radius " type="button" onClick={() => { this.removeName(nameObj.id); }}>Remove</button></td>
                  </tr>
                }, this)
                }
              </table>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
