import { initializeApp, getApps } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { useContext, useState } from "react";
import { userContext } from './../../App';
import { useNavigate , useLocation} from "react-router-dom";
import { handleSignIn, handleSignOut } from './LoginManager';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";


  if ( getApps().length === 0 ) {
    initializeApp(firebaseConfig);
}
function Login() {
  const auth = getAuth();
  
  
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    photo: "",
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
const googleSignIn = () => {
    handleSignIn()
    .then(res =>{
      handleResponse(res, true)
        // setUser(res);
        // setLoggedInUser(res);
        // navigate(location.state.from);
  
    } )
};
const googleSignOut = () => {
    handleSignOut()
    .then(res => {
      handleResponse(res, false)
        // setUser(res);
        // setLoggedInUser(res);
      })
};
  
  

const handleSubmit = (e) => {
  if (newUser && user.email && user.password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          updateUserName(user.name);
          navigate(location.state.from);
          
        })
        .catch((error) => {
          const newUserInfo = {...user};
          newUserInfo.error = "Email already used";
          newUserInfo.success = false;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          
        });
  };

    // .then(res =>{
      // handleResponse(res, true)
      // setUser(res);
      // setLoggedInUser(res);
      // navigate(location.state.from);

  // } )

    
    if (!newUser && user.email && user.password) {
      
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "Email already used";
          newUserInfo.success = false;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          navigate(location.state.from);
        });
    }
    // .then(res =>{
      // handleResponse(res, true)
      // setUser(res);
      // setLoggedInUser(res);
      // navigate(location.state.from);

  // } )
  
  
    e.preventDefault();
  
 };
  const handleResponse = (res, redirect) => {
      setUser(res);
      setLoggedInUser(res);
      if(redirect) {
        navigate(location.state.from);
      }
    }
  const handleChange = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      isFormValid = isEmailValid;
    }
    if (e.target.name === "password") {
      const isPasswordValid =
        e.target.value.length > 6 && e.target.value.length < 32;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("name update successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div style={{textAlign:'center'}} >
      {user.isSignedIn ? (
        <button onClick={googleSignOut}>Sign out</button>
      ) : (
        <button
          style={{ background: "#2da44e", color: "#ffffff" }}
          onClick={googleSignIn}
        >
          Sign in with google
        </button>
      )}
      {user.isSignedIn && (
        <div>
          <h1>Welcome {user.name} </h1>
          <p> Your email: {user.email} </p>
        </div>
      )}
      <h1>Our own authentication</h1>
      <input
        type="checkbox"
        onChange={() => setNewUser(!newUser)}
        name="newUser"
      />
      <label htmlFor="newUser">New user sign up</label>
      <form action="" onSubmit={handleSubmit}>
        {newUser && (
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onBlur={handleChange}
          />
        )}
        <br />
        <input
          type="email"
          name="email"
          id="input-email"
          placeholder="Enter your email address"
          onBlur={handleChange}
          required
        />

        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onBlur={handleChange}
          required
        />
        <br />
        <input
          style={{ background: "#2da44e", color: "#ffffff" }}
          type="submit"
          value={newUser ? "Sign up" : "Sign in"}
        />
      </form>
      {user.success && (
        <p style={{ color: "green" }}>
          User account {newUser ? "created" : "logged in"} successfully
        </p>
      )}
      {user.error && <p style={{ color: "red" }}>{user.error}</p>}
    </div>
  );
  
};


export default Login;
