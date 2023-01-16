import bcrypt from "bcryptjs";
import Admin from "../models/User.js";
const InsertAdminDetailsInDB = async () => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  try {
    const ifAdminExist = await Admin.findOne({
      email: adminEmail,
    });
    //   If not exist , create new admin
    if (!ifAdminExist) {
      const salt = bcrypt.genSaltSync(10);
      const hachedPaasword = await bcrypt.hash(adminPassword, salt);

      const newAdmin = new Admin({
        name: "Ilyas",
        email: adminEmail,
        password: hachedPaasword,
        role: "admin",
      });
      await newAdmin.save();
    }
  } catch (error) {
    throw new Error(error);
  }
};

InsertAdminDetailsInDB();
export default InsertAdminDetailsInDB;
