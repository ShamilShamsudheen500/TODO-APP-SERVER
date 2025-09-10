
const jwt = require('jsonwebtoken');

const jwtMiddleware = async (req, res, next) => { 
    console.log("Inside jwtMiddleware");
    try {
        const token = req.headers["authorization"].split(" ")[1];
        console.log(token);
        
        if (!token) {
            return res.status(404).json("Authorization failed! Token is missing");
        }

        const response = jwt.verify(token, process.env.JWTPASSWORD);
        console.log(response);
        req.userId = response.userId;
        next(); 
    } 
    catch (err) {
        return res.status(500).json({message: err.message});
    }
};

module.exports = jwtMiddleware;