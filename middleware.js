module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
    req.method = 'GET';
  }
  next();
}