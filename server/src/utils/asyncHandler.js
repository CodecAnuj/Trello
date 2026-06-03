// const asyncHandler = async (requestHandler) => {
//     return (req , res , next) => {
//         Promise.resolve(requestHandler(req , res , next)).catch((err) => {
//             next(err);
//         })
//     }
// }

// currently using this one , as this feels easy now ......

const asyncHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message || "internal server error",
    });
  }
};

export { asyncHandler };
