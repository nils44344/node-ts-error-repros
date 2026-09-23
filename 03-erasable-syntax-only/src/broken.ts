enum Status { Active, Inactive }

namespace Legacy { export const x = 1; }

class User {
  constructor(private name: string, readonly id: number) {}
}

const s: Status = Status.Active;
console.log(s, Legacy.x, new User('a', 1).id);
