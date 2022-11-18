const mongoose  = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true},
    email: { type: String, required: true },
    telephone: {type: String, required: false, default: ""}
});

const UsuarioModel = mongoose.model("Usuario", UsuarioSchema);

class Usuario {
    constructor (body) {
        this.body = body    
        this.errors = [];
        this.user =  null;
    }
    async register() {
        this.valida()
        if (this.errors.length > 0) return 
        try {
            this.user = await UsuarioModel.create(this.body);
        } catch (e) {
            console.log(e); 
        };
    };
    
    valida() {
        this.cleanUp()
        // precisa passar nome, sobrenome e email
        if (!this.body.firstName || !this.body.lastName || !this.body.email) {
            this.errors.push("Dados incompletos");
        }
        // email precisa ter @
        if (!this.body.email.search('@')) this.errors.push("Email invalido");
    };

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string' )
                this.body[key] = '';
        }
        this.body = {
            firstName: this.body.firstName,
            lastName: this.body.lastName,
            email: this.body.email,
            telephone: this.body.telephone
        };
    };
};
module.exports = Usuario;