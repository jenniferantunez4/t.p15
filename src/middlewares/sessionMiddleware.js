module.exports = (req,res,next) => {
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        res.locals.color = req.session.color;
    }else{
        if(req.cookies.color){
            res.locals.color = req.cookies.color;
        }
    }
    next();
}