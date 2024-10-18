const bcrypt = require('bcrypt');	 

const  encPass = async(password) =>{
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password,salt);
    return hashPass;
}

const comPassword = async(password,hashPass) =>{
    const isMatch = await bcrypt.password(password,hashPass);
    return isMatch;
}

model.export = {
    encPass,
    comPassword
}