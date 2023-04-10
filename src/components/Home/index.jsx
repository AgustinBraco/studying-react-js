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
        text: "Must be a value between 1 and 20 characters",
        icon: "error",
        timer: 5000,
        button: false,
      });
    } else if (password.length <= 0 || password.length > 20) {
      swal({
        title: "Invalid password",
        text: "Must be a value between 1 and 20 characters",
        icon: "error",
        timer: 5000,
        button: false,
      });
    } else {
      setUserStorage(user);
      setPasswordStorage(passsword);
      setLogin(true);
      swal({
        title: "User created",
        icon: "success",
        timer: 1500,
        button: false,
      });
    };
  };

  function handleUser(event) {
    setUser(event.target.value);
  };

  function handlePassword(event) {
    setPassword(event.target.value);
  };

  function deleteUser () {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    setLogin(false);
    swal({
      title: "User deleted",
      icon: "success",
      timer: 1500,
      button: false,
    });
  };

  if (login) {
    return (
      <div className="logedContainer">
        <p className="logedWelcome">Welcome</p>
        <p className="logedUser">Your user is: {user}</p>
        <p className="logedPassword">Your password is: {password}</p>
      <button onClick={deleteUser} className="logedButton">Delete user</button>
    </div>
    );
  } else if (!login) {
    return (
      <div className="loginContainer">
        <p className="loginText">Register</p>
          <form className="form">
            <input required maxLength={20} type="text" placeholder="User" className="inputUser" value={user} onChange={handleUser}/>
            <input required maxLength={20} type="text" placeholder="Password" className="inputPassword" value={password} onChange={handlePassword}/>
            <button onClick={() => register(user, password)} className="sendForm">Send</button>
          </form>
      </div>
    );
  };
};

export default Home;