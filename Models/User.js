"use strict";

class User{
    constructor(userId, email, firstName, lastName, address, mobileNo, gender, picture, activated, password){
        this.userId = userId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.mobileNo = mobileNo;
        this.gender = gender;
        this.picture = picture;
        this.activated = activated;
        this.password = password;
        }
    getuserId() {
        return this.userId;
    }

    getemail() {
        return this.email;
    }

    getfirstName() {
        return this.firstName;
    }

    getlastName() {
        return this.lastName;
    }

    getaddress() {
        return this.address;
    }

    getmobileNo() {
        return this.mobileNo;
    }

    getgender() {
        return this.gender;
    }

    getpicture() {
        return this.picture;
    }

    getactivated() {
        return this.activated;
    }
    getpassword() {
        return this.password;
    }
    
    
    setuserId() {
         this.userId;
    }
    setemail() {
         this.email;
    }
    setfirstName() {
         this.firstName;
    }
    setlastName() {
         this.lastName;
    }
    setaddress() {
         this.address;
    }
    setmobileNo() {
         this.mobileNo;
    }
    setgender() {
         this.gender;
    }
    setpicture() {
        this.picture;
    }
    setactivated() {
         this.activated;
    }
    setpassword() {
         this.password;
    }
}

module.exports = User;