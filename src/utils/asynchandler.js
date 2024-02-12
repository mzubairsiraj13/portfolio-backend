const asynchandler = (requesthandler) => {
  return (err, req, res, next) => {
    Promise.resolve(requesthandler(err, req, res, next)).catch((err) =>
      next(err)
    );
  };
};

export { asynchandler };
