const addTwoNumbers = (a, b) => {
  try {
    if (!a || !b) {
      throw new Error();
    }
    return a + b;
  } catch (error) {
    throw new Error('please provide valid numbers');
  }
};
// const addTwoNumbers = (a, b) => {
//   return a + b;
// };

describe('Addition service test', () => {
  it('Add two valid numbers', () => {
    const firstNumber = 1;
    const secondNumber = 1;
    const addTwoNumbersResult = addTwoNumbers(firstNumber, secondNumber);
    expect(addTwoNumbersResult).toEqual(firstNumber + secondNumber);
  });

  it('AddTwoNumbers returns error in case of invalid params', () => {
    const secondNumber = 1;
    expect(() => addTwoNumbers(secondNumber)).toThrow(
      'please provide valid numbers'
    );
  });
});
