import React, {Component} from "react";
class Auth{
    constructor(){
        this.login = false

    };
    sign(){
        this.login = true
    };
    logout(){
        this.login =false
    };
    getlogin(){
        return this.login
    }

}