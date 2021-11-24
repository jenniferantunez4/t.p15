const {body, check} = require("express-validator");
module.exports = [
    check("nombre")
    .notEmpty()
    .withMessage("Debe ingresar su nombre"),

    check("color")
    .notEmpty()
    .withMessage("Debe seleccionar un color"),

    check("email")
    .notEmpty()
    .withMessage("Debe ingresar su email").bail()
    .isEmail()
    .withMessage("Ingrese un email válido"),

    check('edad')
    .notEmpty()
    .withMessage('Debe ingresar su edad').bail()
    .isInt({ min: 1, max: 99 })
    .withMessage("Debe ingresar un numero valido") 
]
