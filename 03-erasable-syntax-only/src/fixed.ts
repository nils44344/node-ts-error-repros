export const Status = { Active: 0, Inactive: 1 } as const;
export type Status = (typeof Status)[keyof typeof Status];

export const Legacy = { x: 1 };

class User {
  private name: string;
  readonly id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
  label() { return `${this.name}#${this.id}`; }
}

const s: Status = Status.Active;
console.log(s, Legacy.x, new User('a', 1).label());
