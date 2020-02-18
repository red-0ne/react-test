export class Username {
  constructor(protected readonly value: string) {}

  toString() {
    return this.value;
  }
}