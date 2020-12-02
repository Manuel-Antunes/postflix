import React from 'react';

import { Container } from './styles';
import firebase from '../../services/firebase';
import api from '../../services/api';

function GoogleButton() {
  function handleClick() {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(value => {
        value.user.getIdToken().then(token => {
          api.defaults.headers['Authorization'] = token;
        });
      });
  }
  return <Container onClick={handleClick}></Container>;
}

export default GoogleButton;
