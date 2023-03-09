const bcrypt = require('bcryptjs');

const verifyPassword = async () => {
    const myPassword = 'admin123';
    const hash = '$2a$08$r3C8LounMl7vpc7K/BruRuJ8BGyzKlg1/ltg5z6pQosPZZWZE752W';
    const isMatch = await bcrypt.compare(myPassword, hash);
    console.log(isMatch);
};

verifyPassword();