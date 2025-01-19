import prisma from "../config/db.config.js";

class UserController {
  static async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });

      delete user.password;

      return res.status(200).json({ user: user });
    } catch (error) {}
  }
}

export default UserController;
