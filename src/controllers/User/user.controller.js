const User = require("../../models/Users/users.model");






 exports.createUser = async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            return res.json(user); 
        } catch(e) {
            return res.status(500).json({
                message: "Something went wrong",
                error: e.message  
            });
        }
 }