import { userServices } from "../services/user.services.js";

const userController = {
  signup: async (req, res, next) => {
    const { username, email, password, role, phone } = req.body;
    return await userServices.signup(
      res,
      username,
      email,
      password,
      phone,
      role
    );
  },

  login: async (req, res, next) => {
    const { email, password } = req.body;
    return await userServices.login(res, email, password);
  },

  list: async (req, res, next) => {
    const { page, limit, email } = req.query;
    return await userServices.list(res, page, limit, email);
  },

  getMyProfile: async (req, res, next) => {
    return await userServices.getMyProfile(res, req.user.id);
  },

  findByEmail: async (req, res, next) => {
    const { email } = req.params;
    return await userServices.findByEmail(email, res);
  },

  updateRoleUser: async (req, res, next) => {
    const { _id, role } = req.body;
    return await userServices.updateRoleUser(res, _id, role);
  },

  updateMyUser: async (req, res, next) => {
    const { username, email, password, phone } = req.body;
    return await userServices.updateUser(
      res,
      req.user.id,
      username,
      email,
      password,
      phone
    );
  },

  delete: async (req, res, next) => {
    const { _id } = req.params;
    return await userServices.deleteUser(res, _id);
  },
  logout: async (req, res, next) => {
    return await userServices.logout(res);
  },
};

export { userController };
