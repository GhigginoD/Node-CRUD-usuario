exports.register = async function(req, res) {
  try {
    const usuario = new Usuario(req.body);
    await usuario.register();
    if (usuario.errors.length > 0) {
      return res.send(usuario.errors);
    };
    res.render("home");  
  } catch(e) {
    console.log(e);
    res.render("404");
  }
};