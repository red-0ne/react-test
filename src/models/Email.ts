export class Email {
  constructor(protected readonly value: string) {}

  toString() {
    return this.value;
  }
}