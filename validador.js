function isValidEmail(email){
    const regex=/^[^/s@]+@[^\s@]+\.[^\s@]+$/; //Validar os campos de E-mail (Válido ou não)
    return regex.test(email);
    }

    module.exports = isValidEmail;