import { validate } from "uuid";
import ValueObject from "../value-object";

class StubValueObject extends ValueObject{

}

describe("ValueObject unit test", () => {

    it("Shoud set value", ()=>{
        let vo = new StubValueObject('string value')
        expect(vo.value).toBe('string value')
        
        vo = new StubValueObject({prop1: 'value'})
        expect(vo.value).toStrictEqual({prop1: 'value'})

        vo = new StubValueObject(100)
        expect(vo.value).toBe(100)

        vo = new StubValueObject(null)
        expect( validate(vo.value) ).toBeTruthy;

        vo = new StubValueObject(undefined)
        expect( validate(vo.value) ).toBeTruthy;
    })

    it("Should convert to string", () => {
        const date = new Date()
        let arrange = [
            {received: null, expected: "null"},
            {received: undefined, expected: "undefined"},
            {received: "", expected: ""},
            {received: "fake test", expected: "fake test"},
            {received: 0, expected: "0"},
            {received: 1, expected: "1"},
            {received: 5, expected: "5"},
            {received: true, expected: "true"},
            {received: false, expected: "false"},
            {received: date,  expected: date.toString()},
            {received: {prop1: 'value1'}, expected: JSON.stringify({prop1: 'value1'})}]

        arrange.forEach(element => {
            const vo = new StubValueObject(element.received)
            expect(vo + "").toBe(element.expected)
        });
    })

})