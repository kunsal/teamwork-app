exports.createUser = (req, res) => {
  if(req.body.firstName == undefined) {
    return res.status(400).send({status: 'Bad request', error: 'Email is required'});
  }
  res.send({status: 'User created successfully', data: {name: 'Olakunle Salami'}});
}