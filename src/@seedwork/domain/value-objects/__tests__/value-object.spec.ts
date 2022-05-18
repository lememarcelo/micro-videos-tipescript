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
    })

    it("Should convert to string", () => {
        const date = new Date()
        let arrange = [
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

    it("Should be a immutable object", () => {

        const vo = new StubValueObject({
            prop1: "Value 1",
            deep: {
                prop2: "value 2",
                prop3: new Date()
            }
        })

        expect(() => (vo as any).value.prop1 = "value 1").toThrow("Cannot assign to read only property 'prop1' of object '#<Object>'")
        expect(() => (vo as any).value.deep.prop2 = "value 2").toThrow("Cannot assign to read only property 'prop2' of object '#<Object>'")
        expect(vo.value.deep.prop3).toBeInstanceOf(Date)
    })

})