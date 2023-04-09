import "./home.css";
import { useState, useContext } from "react";
import { Context } from "../../context";

// Sweet alert
import swal from 'sweetalert';

function Home() {
  const { useLocalStorage } = useContext(Context);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [userStorage, setUserStorage] = useLocalStorage("user", "");
  const [passwordStorage, setPasswordStorage] = useLocalStorage("password", "");

  const [login, setLogin] = useLocalStorage("login", false);

  function register (user, passsword) {
    if (user.length <= 0 || user.length > 20) {
      swal({
        title: "Invalid user",
        text: "Must be a value between 3 and 20 characters",
        timer: 5000,
        button: false,
      });
    } else if (password.length <= 0 || password.length > 20) {
      swal({
        title: "Invalid password",
        text: "Must be a value between 3 and 20 characters",
        timer: 5000,
        button: false,
      });
    } else {
      setUserStorage(user);
      setPasswordStorage(passsword);
      setLogin(true);
    };
  };

  function handleUser(event) {
    setUser(event.target.value);
  };

  function handlePassword(event) {
    setPassword(event.target.value);
  };

  function forgetUser () {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    setLogin(false);
  };

  if (login) {
    return (
      <div>
      <p>Welcome</p>
      <p>Your user is: {user}</p>
      <p>Your password is: {password}</p>
      <button onClick={forgetUser}>Forget user</button>
    </div>
    );
  } else if (!login) {
    return (
      <div className="loginContainer">
        <p className="loginText">Register</p>
          <input required minLength={3} maxLength={20} type="text" placeholder="User" className="inputUser" value={user} onChange={handleUser}/>
          <input required minLength={3} maxLength={20} type="text" placeholder="Password" className="inputPassword" value={password} onChange={handlePassword}/>
          <button onClick={() => register(user, password)} className="sendForm">Send</button>
      </div>
    );
  };
};

export default Home;