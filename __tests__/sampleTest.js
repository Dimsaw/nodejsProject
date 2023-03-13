








const addTwoNumbers = (a, b) => {
  return a + b;
};

describe("Addition service test", () => {
  it("Add two valid numbers", () => {
    const firstNumber = 1;
    const secondNumber = 1;
    const result = addTwoNumbers(firstNumber, secondNumber);
    expect(result).toEqual(firstNumber + secondNumber);
  });
});


// const addTwoNumbers = (a, b) => {
//   try {
//     return a + b;
//   } catch (error) {
//     throw new Error('please provide valid numbers')
//   }
// };

// describe("please provide valid numbers", () => {
//    it("Add two valid numbers", () => {
//     const firstNumber = 1;
//     const secondNumber = 1;
//     const result = addTwoNumbers(firstNumber, secondNumber);
//      expect(result).toEqual(firstNumber + secondNumber);
//      });
//   it("addTwoNumbers returns error in case of invalid params", () => {
//     const secondNumber = 1;
//     expect(() => addTwoNumbers (secondNumber).toThrow(new Error('please provide valid numbers')))
//   });
// });
