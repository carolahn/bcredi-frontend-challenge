beforeEach(() => {
  cy.viewport(1280, 847);
});

context("register page", () => {
  it("renders correctly", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Criar meu cadastro");
    cy.contains("Para acompanhar");
    cy.contains("E-mail");
    cy.contains("CPF");
    cy.contains("Data de nascimento");
    cy.contains("Senha");
    cy.contains("Política de Privacidade");
    cy.contains("Cadastrar");
    cy.contains("Entrar agora");

    cy.contains("Obtive crédito");
    cy.contains("Camila Bragança");
    cy.contains("Sideral Tecnologia");
  });

  it("registry with valid credencials", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "20/02/1985"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("Cadastro realizado com sucesso");
  });

  it("shows error message if enters invalid email", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("emailcom");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "20/02/1985"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("E-mail inválido");
  });

  it("shows error message if no email is entered", () => {
    cy.visit("http://localhost:3000");

    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "20/02/1985"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("O campo e-mail é obrigatório");
  });

  it("shows error message if enters invalid CPF", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-00"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "20/02/1985"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("CPF inválido");
  });

  it("shows error message if no CPF is entered", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "20/02/1985"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("Campo obrigatório");
  });

  it("shows error message if no birth is entered", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("Campo obrigatório");
  });

  it("shows error message if birth date is invalid", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "30/02/1985"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("Data inválida");
  });

  it("shows error message if birth date is a future date", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "20/02/2050"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("Data inválida");
  });

  it("registry correctly with leap year birth", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "29/02/2020"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("Cadastro realizado com sucesso");
  });

  it("shows error message if no password is entered", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "20/02/1985"
    );
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("Cadastre uma senha");
  });

  it("shows error message if password is less than eight characters", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "20/02/1985"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345");
    cy.get(".register__input--checkbox").check();
    cy.get(".sc-iBPRYJ").click();

    cy.contains("A senha deve conter, no mínimo, 8 caracteres");
  });

  it("shows error message privacy policy is not checked", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-hKgILt > :nth-child(1) > .sc-eCssSg").type("test@email.com");
    cy.get(".register__container > :nth-child(1) > .sc-eCssSg").type(
      "123.456.789-09"
    );
    cy.get(".register__container > :nth-child(2) > .sc-eCssSg").type(
      "20/02/1985"
    );
    cy.get(".register__input--toggle-eye > .sc-eCssSg").type("12345abcd");
    cy.get(".sc-iBPRYJ").click();

    cy.contains("Confirme os termos de uso");
  });
});
