import { useState } from "react";
import { Accounts } from "./accounts";

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
        <h1>Create Your Account</h1>
      <form>
        <label>Enter first name:
        <input value={userName.at(0).firstName} onChange={username} type="text" />
        </label>
        <label>Enter last name:
        <input value={passWord.at(0).lastName} onChange={password} type="text" />
        </label>
        <label>Enter email address:
        <input value={userName.at(0).email} onChange={username} type="text" />
        </label>
        <label>Create username:
        <input value={passWord.at(0).username} onChange={password} type="text" />
        </label>
        <label>Create password:
        <input value={passWord.at(0).password} onChange={password} type="text" />
        </label>
      </form>

      </>
      
    )
  }