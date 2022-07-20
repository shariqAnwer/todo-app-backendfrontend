import "./App.css";
import Navbar from "./Components/Navbar";
import axios from "axios";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <h2>Login</h2>
        <form onSubmit={(e) => login(e)}>
          <label>Mobile No: </label>
          <div>
            <input type="tel" placeholder="Mobile No" id="input-mobile" />
          </div>
          <label>Password: </label>
          <div>
            <input type="text" placeholder="Password" id="input-pass" />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
}

function login(e) {
  e.preventDefault();
  let request = {
    email: document.getElementById("input-mobile").value,
    password: document.getElementById("input-pass").value,
  };
  axios
    .post("http://localhost:3000/login", request)
    .then((resp) => {
      alert(resp.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default App;
