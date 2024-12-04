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

namespace Common {
  export interface Warning {
    id: number;
    message: string;
  }
}

const user: Special.User = {
  uuid: "1234xxx",
  username: "Adrián",
};

const warning: Common.Warning = {
  id: 999,
  message: "Some Warning",
};

console.log(user, warning);
