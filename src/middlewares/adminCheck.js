module.exports= (req,res,next)=>{
    if(!req.session.user||!req.session.user.isAdmin){
        return res.status(403).send("Forbidden: Admins only")
    }
    next();
}