const profile = async (req, res) => {
  if (!req.authenticatedUser) {
    return res.status(401).send('Unauthorized User Update');
  }
  return res.status(200).send({ email: req.authenticatedUser.email });
};

module.exports = { profile };
