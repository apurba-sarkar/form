const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetatils = err.extraDetatils || "Error from Backend";

console.log("------------")
console.log(status,message,extraDetatils)
  return res.status(status).json({
    message,
    extraDetatils,
  });
};

module.exports = errorMiddleware;
