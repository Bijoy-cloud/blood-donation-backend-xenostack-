const mysql = require('mysql2')

const DATABASE_URL='mysql://8b11ij5pn19xskrmq5cg:pscale_pw_PkFI9P1kBqytX3RNO3J0tvjLRgc3QFnpJmJIrmdOYvn@ap-south.connect.psdb.cloud/blooddrop?ssl={"rejectUnauthorized":true}'

const connection = mysql.createConnection(DATABASE_URL)


module.exports = connection;    