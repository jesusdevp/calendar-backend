/* Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/field-validator");
const { validarJWT } = require("../middlewares/jwt-validator");

const router = Router();

router.post(
  "/register",
  [
    check("name", "El nombre es obligatorio")
      .not()
      .isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "El email debe de ser obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

router.get("/renew", validarJWT, revalidarToken);

module.exports = router;
