import { birthValidator, cpfValidator } from "../validator";

describe("birthValidator function test", () => {
  it("should return true for a valid birth date", () => {
    const birth = "20/02/1980";
    expect(birthValidator(birth)).toBe(true);
  });

  it("should return true for a valid birth date from a leap year", () => {
    const birth = "29/02/2020";
    expect(birthValidator(birth)).toBe(true);
  });

  it("should return false for a invalid birth date", () => {
    const birth = "30/02/1980";
    expect(birthValidator(birth)).toBe(false);
  });

  it("should return false for a future date", () => {
    const birth = "20/02/3000";
    expect(birthValidator(birth)).toBe(false);
  });
});

describe("cpfValidator function test", () => {
  it("should return true for a valid cpf number", () => {
    const cpf = "123.456.789-09";
    expect(cpfValidator(cpf)).toBe(true);
  });

  it("should return false for a invalid cpf number", () => {
    const cpf = "123.456.789-99";
    expect(cpfValidator(cpf)).toBe(false);
  });
});
