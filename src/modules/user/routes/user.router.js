/**
 * @swagger
 * components:
 *   schemas:
 *     Signup:
 *       type: object
 *       required:
 *         - email
 *         - username
 *         - password
 *         - phone
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         username:
 *           type: string
 *           description: The username of the user
 *         password:
 *           type: string
 *           description: The password 8 characters of the user
 *         role:
 *           type: Enum
 *           description: The role of the user
 *       example:
 *         email: VnI8k@example.com
 *         username: alex
 *         password: "12345678"
 *         phone: "123456789"
 *         role: "user or editor"
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password 8 characters of the user
 *       example:
 *         email: VnI8k@example.com
 *         password: "12345678"
 * @swagger
 * components:
 *   schemas:
 *     UpdateRole:
 *       type: object
 *       required:
 *         - _id
 *         - role
 *       properties:
 *         _id:
 *           type: string
 *           description: The id of the user
 *         role:
 *           type: string
 *           description: new role
 *       example:
 *         _id: "123456"
 *         role: editor
 *  @swagger
 * components:
 *   schemas:
 *     UpdateMyUser:
 *       type: object
 *       optional:
 *         - email
 *         - username
 *         - phone
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         username:
 *           type: string
 *           description: The username of the user
 *         password:
 *           type: string
 *           description: The password 8 characters of the user
 *       example:
 *         email: VnI8k@example.com
 *         username: alex
 *         phone: "123456789"
 *         password: "12345678"
 * @swagger
 * components:
 *   schemas:
 *     Delete:
 *       type: object
 *       required:
 *         - _id
 *       properties:
 *         _id:
 *           type: string
 *           description: The id of the user
 *       example:
 *         _id: "123456"
 * @swagger
 * components:
 *   schemas:
 *     filter:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         example:
 *           email: VnI8k@example.com
 * @openapi
 * tags:
 *   name: User
 *   description: The user managing API
 * paths:
 *   /user/signup:
 *     post:
 *       summary: Create a new user
 *       tags: [User]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Signup'
 *       responses:
 *         201:
 *           description: Created user
 *           content:
 *             application/json:
 *               schema:
 *                example:
 *                   message: User created
 *                   success: true
 *   /user/login:
 *     post:
 *       summary: User login
 *       tags: [User]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 example:
 *                   token: string
 *                   success: true
 *                   user:
 *                     _id: 123456
 *                     username: alex
 *                     email: VnI8k@example.com
 *                     phone: "123456789"
 *                     role: admin
 *                     createdAt: 2022-10-11T14:20:09.000Z
 *                     createdUp: 2022-10-11T14:20:09.000Z
 *   /user/list:
 *     get:
 *       summary: Get all users role admin, user or editor
 *       security:
 *         - BearerAuth:
 *            type: http
 *            scheme: bearer
 *       tags: [User]
 *       parameters:
 *         - in: query
 *           name: page
 *           type: number
 *           default: 1
 *           description: The page of the user
 *         - in: query
 *           name: limit
 *           type: number
 *           default: 10
 *           description: The limit of the user
 *         - in: query
 *           name: email
 *           type: string
 *           required: false
 *           description: The email of the user
 *
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 example:
 *                   _id: 123456
 *                   username: alex
 *                   email: VnI8k@example.com
 *                   phone: "123456789"
 *                   role: admin
 *                   createdAt: 2022-10-11T14:20:09.000Z
 *                   createdUp: 2022-10-11T14:20:09.000Z
 *   /user/profile:
 *     get:
 *       summary: Get user profile
 *       security:
 *         - BearerAuth:
 *            type: http
 *            scheme: bearer
 *       tags: [User]
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 example:
 *                   _id: 123456
 *                   username: alex
 *                   email: VnI8k@example.com
 *                   phone: "123456789"
 *                   role: admin
 *                   createdAt: 2022-10-11T14:20:09.000Z
 *                   createdUp: 2022-10-11T14:20:09.000Z
 *   /user/update-role:
 *     patch:
 *       summary: Update user role admin, user or editor
 *       security:
 *         - BearerAuth:
 *            type: http
 *            scheme: bearer
 *       tags: [User]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateRole'
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 example:
 *                   _id: 123456
 *                   username: alex
 *                   email: VnI8k@example.com
 *                   phone: "123456789"
 *                   role: admin
 *                   createdAt: 2022-10-11T14:20:09.000Z
 *                   createdUp: 2022-10-11T14:20:09.000Z
 *   /user/{email}:
 *     get:
 *       summary: Get user by email
 *       security:
 *         - BearerAuth:
 *            type: http
 *            scheme: bearer
 *       tags: [User]
 *       parameters:
 *         - in: path
 *           name: email
 *           type: string
 *           required: true
 *           description: The email of the user
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 example:
 *                   _id: 123456
 *                   username: alex
 *                   email: VnI8k@example.com
 *                   phone: "123456789"
 *                   role: admin
 *                   createdAt: 2022-10-11T14:20:09.000Z
 *                   createdUp: 2022-10-11T14:20:09.000Z
 *   /user/update-my-user:
 *     patch:
 *       summary: Update my user
 *       security:
 *         - BearerAuth:
 *            type: http
 *            scheme: bearer
 *       tags: [User]
 *       requestBody:
 *         required: false
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateMyUser'
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 example:
 *                   _id: 123456
 *                   username: alex
 *                   email: VnI8k@example.com
 *                   phone: "123456789"
 *                   role: admin
 *                   createdAt: 2022-10-11T14:20:09.000Z
 *                   createdUp: 2022-10-11T14:20:09.000Z
 *   /user/delete/{_id}:
 *     delete:
 *       summary: Delete user role admin or editor
 *       security:
 *         - BearerAuth:
 *            type: http
 *            scheme: bearer
 *       tags: [User]
 *       parameters:
 *         - in: path
 *           name: _id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 example:
 *                   message: User deleted
 *                   success: true
 */

import { Router } from "express";
import { userController } from "../controller/user.controller.js";
import {
  filterValidate,
  validateDeleteUser,
  validateFindByEmail,
  validateLogin,
  validateMyUserUpdate,
  validateSignup,
  validateUpdateRoleUser,
} from "../validations/validateUser.js";
import {
  authorizeRoles,
  isAuthenticated,
} from "../middleware/authProtectRoute.js";

const router = Router();

router.route("/user/signup").post(validateSignup, userController.signup);

router.route("/user/login").post(validateLogin, userController.login);

router
  .route("/user/list")
  .get(
    isAuthenticated,
    authorizeRoles("admin", "editor", "user"),
    filterValidate,
    userController.list
  );

router.route("/user/profile").get(isAuthenticated, userController.getMyProfile);

router
  .route("/user/update-role")
  .patch(
    isAuthenticated,
    authorizeRoles("admin"),
    validateUpdateRoleUser,
    userController.updateRoleUser
  );

router
  .route("/user/update-my-user")
  .patch(isAuthenticated, validateMyUserUpdate, userController.updateMyUser);

router
  .route("/user/delete/:_id")
  .delete(
    isAuthenticated,
    validateDeleteUser,
    authorizeRoles("admin"),
    userController.delete
  );

router
  .route("/user/:email")
  .get(isAuthenticated, validateFindByEmail, userController.findByEmail);

const userRoute = router;

export { userRoute };
