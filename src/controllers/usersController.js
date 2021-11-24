const {validationResult} = require("express-validator");

module.exports = {
    register: (req,res)=>{
        res.render("register");
    },
    save: (req, res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let usuario= {
                nombre: req.body.nombre,
                email: req.body.email,
                edad: req.body.edad ? req.body.edad : ""
            }
            req.session.usuario = usuario;
            req.session.color = req.body.color;
            if(req.body.persistencia){
                res.cookie("color", req.body.color, {maxAge: 120000});
            }
            res.redirect("register");    
        }else{
            res.render("register",{
                errors : errors.mapped(),
                old: req.body
            })
        }
        
    },
    thankyou: (req,res)=>{
        res.render("thankyou");
    },
    reset: (req,res)=>{
        if(res.cookies){
            res.cookies.color = undefined;
        }
        if(req.session.color){
            req.session.color = undefined;
        }
        res.redirect("register");
    }
}