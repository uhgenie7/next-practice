import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../types/todo";
import fs from "fs";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    //   try, catch 문을 이용하여 파일을 불러오는 과정에서 에러가 발생할 경우 에러를 확인할 수 있음. 에러코드를 결과값으로 보내주도록 함.
    try {
      const todos = await new Promise<TodoType[]>((resolve, reject) => {
        //   fs.readFile은 비동기함수, Promise를 이용하여 파일을 불러오는 것을 기다림.결과값으로 TodoType[]의 타입을 가진 todos를 리턴한다.
        fs.readFile("/data/todos.json", (err: any, data: any) => {
          // fs.readFile은 첫 번째 인자로 데이터를 불러올 파일의 경로를 받음, 두 번째 인자로 콜백을 받음. 콜백은 에러값과 데이터값을 받음.
          if (err) {
            return reject(err.message);
            // 에러라면 에러 메시지를 뱉음
          }
          const todosData = data.toString();
          // 파일 데이터는 Buffer 타입으로, toString을 이용하여 값을 문자열 형태로 불러옴
          // * Buffer란 Node.js 에서 제공하는 Binary 의 데이터를 담을 수 있는 Object 입니다. 바이너리 데이터라는 말 그대로 01001010... 과 같은 데이터가 Buffer 객체에 담긴다는 말.
          if (!todosData) {
            return resolve([]);
            // *todos.json 값이 비어있다면 todosString 값은 ""가 되어 JSON.parse에서 에러가 발생함. 따라서 없다면 빈 배열을 리턴해야함.
          }
          const todos = JSON.parse(data.toString());
          return resolve(todos);
        });
      });
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
  res.statusCode = 405;
  console.log(res.statusCode);
  return res.end();
};

// fs.readFileSync 사용법
// 파일을 동기적으로 불러오는 함수.

// import { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs";
// import { TodoType } from "../../types/todo";

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === "GET") {
//     try {
//       const todosBuffer = fs.readFileSync("data/todos.json");
//       const todosString = todosBuffer.toString();
//       if (!todosString) {
//         res.statusCode = 200;
//         res.send([]);
//       }
//       const todos: TodoType[] = JSON.parse(todosString);
//       res.statusCode = 200;
//       return res.send(todos);
//     } catch (e) {
//       console.log(e);
//       res.statusCode = 500;
//       res.send(e);
//     }
//   }
//   res.statusCode = 405;
//   return res.end();
// };
