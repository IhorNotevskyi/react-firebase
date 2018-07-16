import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FormCreate from './FormCreate';
import firebase from './firebase';

class App extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    const listRef = firebase.database().ref("list");
    listRef.on("value", snapshot => {
      let list = snapshot.val();
      this.setState({ list });
    });
  }

  onSubmit(_values){
    const listRef = firebase.database().ref("list");
    listRef.push(_values);
  }

  deleteItem(_key){
    if (window.confirm('Are you sure you wish to delete this item?')){
      const itemRef = firebase.database().ref(`list/${_key}`);
      itemRef.remove();
    }
  }

  render() {
    const {list} = this.state;
    return (
      <div>
        <FormCreate onSubmit={this.onSubmit}/>
        <ul className="text-center">
            {Object.entries(list).map(([key, {firstName, lastName, email, gender, country}], index) => (
              <li key={key} className="h4 text-muted">
                {`${index+1}. ${firstName} ${lastName} (${gender}): ${email}, ${country}`}
                <div className="d-inline">
                  <Link to={`${key}`}><button className="btn btn-sm btn-primary">Edit</button></Link>
                  <button className="btn btn-sm btn-danger" onClick={()=>this.deleteItem(key)}>Delete</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
