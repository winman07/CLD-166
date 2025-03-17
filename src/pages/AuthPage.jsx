import { userSignIn, userSignUp, userSignOut } from "../auth"; // Ensure correct relative path
import { useState } from "react";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = async () => {
    try {
      const user = await userSignIn(username, password);
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await userSignUp(username, password, email);
      console.log("User signed up:", response);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await userSignOut();
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h1>Authentication</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="email" placeholder="Email (for signup)" value={email} onChange={(e) => setEmail(e.target.value)} />

      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default AuthPage;

