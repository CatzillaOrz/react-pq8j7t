const add = (a, b) => a + b;
const generateGreeting = (name) => `hello ${name}`;

test("should add two number", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should say hello", () => {
  const result = generateGreeting("viviane");
  expect(result).toBe("hello viviane");
});
