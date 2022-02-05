"use strict"
var db = require('../db-connection');

class UserDB{
    getAllUsers(callback){
        var sql = "SELECT * FROM my_database.users";
        db.query(sql, callback)
        
    }
     updateUser(user, callback){//update the user infomation
         var sql = "UPDATE my_database.users SET email = ?, firstName = ?, lastName = ?, address = ?, mobileNo = ?, gender = ?, picture = ?  WHERE userId = ?";
         return db.query(sql, [user.getemail(), user.getfirstName(), user.getlastName(), user.getaddress(), user.getmobileNo(), user.getgender(), user.getpicture(), user.getuserId()], callback);
     }

     addUser(user, callback){//adds a user into the Database
        var sql = "INSERT INTO my_database.users (email, firstName, lastName, address, mobileNo, gender, picture, activated, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return db.query(sql, [user.getemail(), user.getfirstName(), user.getlastName(), user.getaddress(), user.getmobileNo(), user.getgender(), user.getpicture(), user.getactivated(), user.getpassword(), user.getuserId()], callback);
    }
     deleteUser(userId, callback){//deletes the user
        var sql = "DELETE from my_database.users WHERE userId = ?";
        return db.query(sql, [userId], callback);
    }
    loginUser(email, password,callback){//logins the user, checks if the email and password are the same in the database. uses email because its easier for people to remember then userID
        var sql = "SELECT * from my_database.users WHERE  email = ?"
        return db.query(sql,[email,password],callback);
    }
    userinfomation(email,callback){
        var sql = "SELECT * from my_database.users WHERE  email = ?"
        return db.query(sql,[email],callback);
    }
}

module.exports = UserDB;