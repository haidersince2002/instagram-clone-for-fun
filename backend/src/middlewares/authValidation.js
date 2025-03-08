// Create the validation middleware
export const validateUser = (schema) => (req, res, next) => {
  try {
    const validatedData = schema.parse(req.body);

    // Replace the request body with the validated data
    req.body = validatedData;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    if (error.errors) {
      // Format Zod validation errors
      const formattedErrors = error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return res.status(400).json({
        status: "error",
        message: "Validation failed",
        errors: formattedErrors,
      });
    }

    // Handle any other errors
    return res.status(500).json({
      status: "error",
      message: "Server error during validation",
    });
  }
};
