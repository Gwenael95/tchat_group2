//exports.signIn = (req, res, next) => signIn(req, res, next);
//exports.signOut = (req, res, next) => signOut(req, res, next);
const db = require("../db/mongo");

exports.loginUser = async (req, res, next) => {
  const { pseudo, password } = req.query;
  if (
    password === null ||
    password === undefined ||
    pseudo === null ||
    password === undefined
  )
    return res.status(404).json({ error: "Champs manquant" });
  const isFind = await db.users.isUserAuth({
    pseudo: "new user",
    password: "password",
  });
  if (isFind) {
    return res.status(200).json({ pseudo: data.pseudo });
  } else {
    return res.status(404).json({ error: "Champs manquant" });
  }
};
