const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");

const userSchema = new Schema({
    name: {
        type: String,
        max:20,
        required:true,
        trim:true,
    },
    email: {
        type: String,
        required:true,
        trim:true
    },
    enc_password: {
        type: String,
    },
    salt: String
}, { timestamps: true, });

userSchema.methods = {
    securePassword: function(plainPassword) {
        if(!plainPassword) return;
        try {
         return crypto.createHash("sha256", this.salt)
                    .update(plainPassword)
                    .digest("hex");
        } catch(e) {
            console.log("Failed to encrypt password");
        }
    },
    authenticate: function(password) {
        return this.securePassword(password) === this.enc_password;
    }
}

userSchema.virtual("password").set(function(password) {
    try{
        // to return password on get method
        this._password = password;
        this.salt = "THE_SALT_WILL_BE_HERE";
        this.enc_password = this.securePassword(password);
    } catch(e){
        console.log("Virtual Password field error",e.message);
    }
}).get("password", function(){
    return this._password;
});



module.exports = mongoose.model("User", userSchema);