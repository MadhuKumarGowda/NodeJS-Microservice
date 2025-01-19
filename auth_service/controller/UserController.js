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

  static async getUsers(req, res) {
    const { userIds } = req.body;
    console.log(`${userIds}`);
    const users = await prisma.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return res.json({ users: users });
  }
}

export default UserController;
