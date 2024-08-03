const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const extraDetatils = err.errors[0]?.message || "Validation error";
    const message = "fill properly";
    const status = 422;
    // res.status(400).json({
    // console.log(errs);
    //   msg: errs,
    // });

    console.log("----------");
    const errobj = {
      status,
      message,
      extraDetatils,
    };
    
    next(errobj);

    console.log(errobj);

  }
};

module.exports = validate;
