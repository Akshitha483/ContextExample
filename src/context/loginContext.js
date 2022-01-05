import React from "react";

const LoginContext = React.createContext();

let LoginProvider = LoginContext.Provider
let LoginConsumer = LoginContext.Consumer

export default LoginContext;
export {LoginProvider,LoginConsumer}