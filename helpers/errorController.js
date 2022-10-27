module.exports = (err, req, res, next) => {
  res.status(err.code || 500).json({
    status: err.name || "Internal Server Error",
    message: err.message || "Something Very Bad Happened",
  });
};
