import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { SignUpForm } from './components/SignupForm';
import { SignupFormik } from './components/SignupFormik';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
