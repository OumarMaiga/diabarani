import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import Connexion from './Components/Auth/Connexion'
import Inscription from './Components/Auth/Inscription'
import MotDePasseOublie from './Components/Auth/Motdepasseoublie'
import Verification from './Components/Auth/Verification'
import Navigation from './Navigation/Navigation'

export default function App() {
  return (
      <Navigation/>
  );
}
