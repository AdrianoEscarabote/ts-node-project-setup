import Person from "./person"

it("should sum", () => {
  const person = new Person()

  expect(person.sayMyName()).toBe("Hello world")
})
