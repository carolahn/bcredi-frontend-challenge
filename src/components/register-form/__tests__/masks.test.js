import { cpfMask, birthMask } from "../masks";

describe("cpfMask function test", () => {
  it("should change a good input correctly", () => {
    const cpf = "12345678909";
    expect(cpfMask(cpf)).toBe("123.456.789-09");
  });

  it("should change a bad input with letters correctly", () => {
    const cpf = "123a4567b8909";
    expect(cpfMask(cpf)).toBe("123.456.789-09");
  });
});

describe("birthMask function test", () => {
  it("should change a good input correctly", () => {
    const cpf = "20021980";
    expect(birthMask(cpf)).toBe("20/02/1980");
  });

  it("should change a bad input with letters correctly", () => {
    const cpf = "200c219a80";
    expect(birthMask(cpf)).toBe("20/02/1980");
  });
});
