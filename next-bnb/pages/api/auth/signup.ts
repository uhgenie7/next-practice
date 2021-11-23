import { NextApiRequest, NextApiResponse } from "next";
import { StoredUserType } from "../../../types/user";
import bcrypt from "bcryptjs";
import Data from "../../../lib/data/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, firstname, lastname, password, birthday } = req.body;

    if (!email || !firstname || !lastname || !password || !birthday) {
      res.statusCode = 400;
      return res.send("필수 데이터가 없습니다.");
    }

    const userExist = Data.user.exist({ email });

    if (userExist) {
      res.statusCode = 405;
      res.send("이미 가입된 이메일입니다.");
    }

    const users = Data.user.getList();
    let userId;
    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const newUser: StoredUserType = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      birthday,
      profileImage: "/static/image/default_user_profile_image.jpg",
    };

    Data.user.write([...users, newUser]);
  }

  res.statusCode = 405;

  return res.end();
};
