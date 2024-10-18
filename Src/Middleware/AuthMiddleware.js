const secret = "abcd";

const authMiddleware = (req, res, next) =>{
    const token = req.headers.token;
    if(token == undefined ){
        res.status(401).json({
            message: "Token is required",
        });
    }else{
        if(token == secret){
            next();
        }else{
            res.status(401).json({
                message: "Invalid token",
            });
        }
    }
}

module.exports = {
    authMiddleware,
}