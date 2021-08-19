import { useState, useEffect, useContext } from "react";
import CartContext from "../CartContext";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

const Login = () => {
  const cartCtx = useContext(CartContext);
  const history = useHistory(); // used to redirect
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseResponse, setFirebaseResponse] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to home page
        setFirebaseResponse(true);
        history.push("/");
      })
      .catch((err) => {
        setFirebaseResponse(false);
        alert(err.message);
      });
  };

  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in
        setFirebaseResponse(true);
        history.push("/");
      })
      .catch((err) => {
        setFirebaseResponse(false);
        alert(err.message);
      });
  };

  useEffect(() => {
    console.log("RUNNING USE-EFFECT");
    if (firebaseResponse) {
      auth.onAuthStateChanged((authUser) => {
        cartCtx.loginUser(authUser);
      });
    }
  }, [firebaseResponse]);

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h2>Sign in</h2>
        <form action="">
          <h5>Email</h5>
          <input type="text" value={email} onChange={emailChangeHandler} />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
