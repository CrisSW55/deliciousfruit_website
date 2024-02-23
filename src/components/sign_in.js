import { useState } from "react";
import { Accounts } from "./accounts";
import { Link } from 'react-router-dom';
export default function SignIn() {
  const accounts = Accounts;
  const [userName, setuserName] = useState(accounts);
  const [passWord, setpassword] = useState(accounts);
  const username = (event) => {
    setuserName(event.target.value)
  }
  const password = (event) => {
    setpassword(event.target.value)
  }
    return (
      <>
        <h1>Welcome, Sign-in</h1>
        <form>
          <label>Username:
          <input value={userName.at(0).username} onChange={username} type="text" />
          </label>
          <label>Password:
          <input value={passWord.at(0).password} onChange={password} type="text" />
          </label>
        </form>
        <p>If you don't have an account click the create account! </p>
        <Link to="/signup">Create Account</Link>
      </>
      
    )
  }