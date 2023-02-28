export interface User {
  username: string;
  password: string;
}

export const users = new Map([
  [
    "john",
    {
      username: "john",
      password: "john",
    },
  ],
  [
    "gil",
    {
      username: "gil",
      password: "gil",
    },
  ],
]);
