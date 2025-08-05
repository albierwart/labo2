const bcrypt = require('bcryptjs');
const password = "test1234="; // Mot de passe en clair
const hashedPassword = bcrypt.hashSync(password, 10); // 10 = coût du hash
console.log("resultat:  " ,hashedPassword); // Ex: $2a$10$N9qo8uLOickgx2ZMRZoMy..