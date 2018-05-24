import React from 'react'

import './SignIn.css'
import googleLogo from './google.svg'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className="SignIn">
      <header className="Header">
        <img src="media/quill.svg" alt="" />
        <span className="title">Noteherder</span>
      </header>
      <main>
        <h3>Wanna write some notes?</h3>
        <p>Look no further, you're one step away from being able to write whatever you want!</p>
        <button
          className="github"
          onClick={() => authenticate(githubProvider)}
        >
          <i className="fab fa-github"></i>
          Sign in with GitHub
        </button>
        <button 
          className="google"
          onClick={() => authenticate(googleProvider)}
        >
          <img src={googleLogo} alt="" />
          Sign in with Google
        </button>
      </main>
    </div>
  )
}
export default SignIn