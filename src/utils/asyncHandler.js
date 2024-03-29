const asyncHandler = (reqHandler) => {
  return (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (funct) => async (req, res, next) => {
//   try {
//     await funct(req, res, next);
//   } catch (error) {
//     res.status(err.code || 400).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };


