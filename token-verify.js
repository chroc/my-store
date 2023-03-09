const jwt = require('jsonwebtoken');

const secret = 'mysecretcat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3ODIyNzE3MH0.7TRx13DFXI8SYXAL49qqPIXpi471BjSgiX6jCzoDGx8';

const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};

const payload = verifyToken(token, secret);
console.log(payload);