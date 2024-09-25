import { User } from "../entity/user.entity.js";

const userRepository = {
  signup: async (newUser) => {
    const { username, email, password, phone, role } = newUser;

    const user = await User.create({
      username,
      email,
      password,
      phone,
      role,
    });

    return {
      user,
    };
  },

  findByEmail: async (email) => {
    const user = await User.findOne({ email }).select("+password");
    return {
      user,
    };
  },
  findById: async (id) => {
    const user = await User.findById({ _id: id });
    return {
      user,
    };
  },

  list: async (page = 1, limit = 10, email) => {
    const skip = (page - 1) * limit;

    let query = {};

    if (email) {
      query = { email: { $regex: email, $options: "i" } };
    }
    const users = await User.find({ ...query })
      .skip(skip)
      .limit(limit);
    const count = await User.countDocuments();
    return {
      users,
      count,
    };
  },
  updateRoleUser: async (_id, role) => {
    const updateUser = await User.findByIdAndUpdate(
      { _id },
      { $set: { role } },
      { new: true }
    );
    return {
      updateUser,
    };
  },
  update: async (_id, newUser) => {
    const { username, email, password, phone } = newUser;

    const updateUser = await User.findByIdAndUpdate(
      { _id },
      { $set: { username, email, password, phone } },
      { new: true }
    );
    return {
      updateUser,
    };
  },

  deleteUser: async (_id) => {
    const deleteUser = await User.findByIdAndDelete({ _id });
    return {
      deleteUser,
    };
  },
};

export { userRepository };
