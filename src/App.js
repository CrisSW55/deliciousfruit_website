import logo from './logo.svg';
import './App.css';
import './App.css';
import * as React from 'react';
import { useState,useEffect } from 'react';
import NavBar from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/homepage';
import AboutPage from './components/aboutpage';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
 <>

    {/* <NavBar /> */}
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
      



    

 </>
  );
}

export default withAuthenticator(App);
