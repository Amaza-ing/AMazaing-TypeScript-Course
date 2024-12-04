// Namespaces

namespace Common {
  export interface User {
    id: number;
    username: string;
  }

  export interface Error {
    id: number;
    isCritical: boolean;
    message: string;
  }
}

const user: Common.User = {
  id: 1234,
  username: "Adrián",
};

console.log(user);
