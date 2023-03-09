const bcrypt = require('bcryptjs');

const hashPassword = async () => {
    const myPassword = 'admin123';
    const hash = await bcrypt.hash(myPassword, 8);
    console.log(hash);
};

hashPassword();