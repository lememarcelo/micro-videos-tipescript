import { v4 as uuidv4, validate as validateUUID } from "uuid"

import InvalidUuidErro from "../erros/invalid-uuid.error"

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || uuidv4()
    this.validate()
  }

  private validate() {
    const isValid = validateUUID(this.id);
    if (!isValid) {
      throw new InvalidUuidErro()
    }
  }
}
