import InvalidUuidErro from "../../../errors/invalid-uuid.error"
import UniqueEntityId from "../unique-entity-id.vo"
import {validate as validateUUID } from "uuid"


describe('UniqueEntityID unit test', () => {

    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')

    it('Should trow error when uuid is invalid', () => {
       expect( () => new UniqueEntityId("Fake id")).toThrow(new InvalidUuidErro())
       expect(validateSpy).toBeCalled()
    })

    it("Should accept a uuid passed on contructor", () => {
        const uuid = "d1d3c3e4-5dfe-4e0b-a946-09f6ea8fcb0f"
        const vo = new UniqueEntityId(uuid)
        expect(vo.value).toBe(uuid)
        expect(validateSpy).toBeCalled()
    })

    it("Should accept a uuid passed on contructor", () => {
        const vo = new UniqueEntityId()
        expect(validateUUID(vo.value)).toBeTruthy()
        expect(validateSpy).toBeCalled()
    })

})