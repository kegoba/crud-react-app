class Auth {
    constructor() {
        this.isSignin = false;
    }
    signin(cb) {
        cb()
        this.isSignin = true;
        console.log("login active")

    }
    signOut(cb) {
        this.isSignin = false;
        console.log("login inactive")
        cb()
    }
    getAuth() {
        return this.isSignin

    }
}
export default new Auth();