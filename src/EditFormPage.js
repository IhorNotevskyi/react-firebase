import React, { Component } from 'react';

import FormCreate from './FormCreate';
import firebase from './firebase';

class EditFormPage extends Component {
  state = {
    item: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const itemRef = firebase.database().ref(`list/${id}`);
    itemRef.on("value", snapshot => {
      let item = snapshot.val();
      this.setState({ item });
    });
  }

  onSubmit(_values){
    const id = this.props.match.params.id;
    const itemRef = firebase.database().ref(`list/${id}`);
    itemRef.update(_values);
    this.props.history.push("/");
  }
  render() {
    const {item} = this.state;
    if (!Object.keys(item).length){
      return (
        <div>Loading...</div>
        );
    }
    return (
      <div>
        <FormCreate initialValues={item} onSubmit={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}

export default EditFormPage;
