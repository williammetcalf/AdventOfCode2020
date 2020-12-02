export class Password {
  public letter: string;
  public n1: number;
  public n2: number;
  public password: string;

  static validateP1(password: Password): boolean {
    const letterCount = password.password
      .split("")
      .filter((l) => l === password.letter).length;

    return letterCount >= password.n1 && letterCount <= password.n2;
  }

  static validateP2(password: Password): boolean {
    const c1 = password.password.charAt(password.n1 - 1);
    const c2 = password.password.charAt(password.n2 - 1);
    const c1Valid = c1 === password.letter;
    const c2Valid = c2 === password.letter;

    return (c1Valid && !c2Valid) || (!c1Valid && c2Valid);
  }

  constructor(line: string) {
    const [rawPolicy, password] = line.split(": ");
    const [length, letter] = rawPolicy.split(" ");
    const [min, max] = length.split("-");

    this.letter = letter;
    this.n1 = +min;
    this.n2 = +max;
    this.password = password;
  }
}
