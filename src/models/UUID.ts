export class UUID {
  constructor(protected readonly value: string) {}

  toString() {
    return this.value;
  }
}
