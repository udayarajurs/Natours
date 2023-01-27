const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const NewUser = await User.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      user: NewUser,
    },
  });
});
