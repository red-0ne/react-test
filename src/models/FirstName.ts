export class FirstName {
  constructor(protected readonly value: string) {}

  toString() {
    return this.value;
  }
}