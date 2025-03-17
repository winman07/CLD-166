import { signIn, signUp, signOut } from "@aws-amplify/auth/cognito";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const userSignIn = async (username, password) => {
  try {
    const user = await signIn({ username, password });
    console.log("Sign in successful:", user);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

const userSignUp = async (username, password, email) => {
  try {
    const response = await signUp({
      username,
      password,
      options: {
        userAttributes: { email },
      },
    });
    console.log("Sign up successful:", response);
    return response;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

const userSignOut = async () => {
  try {
    await signOut();
    console.log("Sign out successful");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export { userSignIn, userSignUp, userSignOut };


