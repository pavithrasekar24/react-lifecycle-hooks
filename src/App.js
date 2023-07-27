import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
export default function App() {
  const [details, setDetails] = useState({
    username: '',
    password: '',
  });
  const [isValid, setIsValid] = useState('disable');
  let { username, password } = details;
  let handleChange = (e) => {
    let { name, value } = e.target;
    let det = { ...details };
    det[name] = value;
    setDetails(det); // setState // state asynchornous -> not sequece
    // console.log(details);
    // loginEnable();
  };

  //useEffect -> React hooks
  //lifecycle->child -adult -senior
  //component lifecycle -> render stage -> useEffect

  // 1. mounting -> before loading component (trigger one time)
  useEffect(() => {}, [console.log('mounting')]);
  // ex: instrutor start test -> navigate to qn page timer start
  //[] -> empty dependency

  // 2. updating -> whenever you state & props executed  (trigger value change)
  useEffect(() => {
    console.log('updating');
    loginEnable();
  }, [details]);

  // 3. unmounting -> componnet destroy (leave)
  useEffect(() => {
    return () => {
      console.log('unmounting');
    };
  }, []);
  /*ex: 
   clearItem, cleartieout
  */

  let loginEnable = () => {
    if (details.username != '' && details.password != '') {
      setIsValid(''); // userprovide -> '' isValid -> enable
    } else {
      setIsValid('disable'); // user  not provide -> isValid -> 'disbale' -> diabled
    }
  };
  let handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <h3>Providing Value enable Login button</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Enter Username"
          maxLength={10}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter Password"
          maxLength={15}
        />
        <br />
        <br />
        <button type="sumit" disabled={isValid}>
          Login
        </button>
      </form>
    </div>
  );
}
