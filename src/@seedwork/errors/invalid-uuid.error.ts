export default class InvalidUuidErro extends Error {
  constructor(message?: string) {
    super(message || "Id must be a valid UUDI");
    this.name = "InvalidUuidError";
  }
}
