const bcrypt = require("bcrypt");
const User = require("../model/users");

const register = (req, res) => {
  const { name, password, email } = req.body;

  User.findOne({ email }).then((user) => {
    if (user) {
      return res.json({ message: "bu e-posta zaten mevcuttur." });
    } else if (!email || !name || !password) {
      return res.json({ message: "Hatali email/kullanıcı adı/ parola" });
    } else {
      bcrypt.hash(password, 10, (error, passwordHash) => {
        if (error) res.json({ error });
        else {
          const newUser = new User({
            name,
            email,
            password: passwordHash,
          });
          newUser
            .save()
            .then((user) => {
              res.json({ message: "User Basariyla Kaydedildi", user });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;
