import React, { Component } from "react";
import {Route, Redirect } from "react-router-dom";
import Auth from "./auth"


const ProtectedRoute = ({component: Component, ...rest}) =>{
    //const {isLogin } = localStorage.getItem(isLogin) === true

    return(
        <Route
        {...rest}
        render={(props) => Auth.isSignin 
            ?  <Component {...props} />
            :
              <Redirect
                    to={{
                        pathname:"/login",
                        state:{
                            from: props.location
                        }
                    }}
                    />
                
            }
        
        />
    );
};

export default ProtectedRoute;