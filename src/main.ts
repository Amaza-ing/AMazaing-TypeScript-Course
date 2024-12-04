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

namespace Special {
  export interface User {
    uuid: string;
    username: string;
  }
}

const user: Special.User = {
  uuid: "1234xxx",
  username: "Adrián",
};

console.log(user);
