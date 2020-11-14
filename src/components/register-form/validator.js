// checks if the date of birth is in the future,
// the number of days according to month

import { parse } from "@fortawesome/fontawesome-svg-core";

// and leap years
export const birthValidator = (birth) => {
  let birthDay = parseInt(birth.slice(0, 2));
  let birthMonth = parseInt(birth.slice(3, 5));
  let birthYear = parseInt(birth.slice(6));

  let today = new Date();
  let day = parseInt(today.getDate());
  let month = parseInt(today.getMonth() + 1);
  let year = parseInt(today.getFullYear());

  if (
    !birth.match(
      /(^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$)/i
    )
  ) {
    return false;
  } else if (birthYear > year) {
    return false;
  } else if ((birthYear === year) & (birthMonth > month)) {
    return false;
  } else if ((birthYear === year) & (birthMonth === month) & (birthDay > day)) {
    return false;
  }

  return true;
};

// checks if the cpf number is valid
const cpfChecker = (cpf) => {
  cpf = cpf.replace(/([^\d])+/gim, "");
  let sum = 0;
  let remainder = 0;

  if (cpf === "00000000000") {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
  }

  if (remainder == 10 || remainder == 11) {
    remainder = 0;
  }
  if (remainder != parseInt(cpf.substring(9, 10))) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
  }

  if (remainder == 10 || remainder == 11) {
    remainder = 0;
  }
  if (remainder != parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
};

export const cpfValidator = (cpf) => {
  if (
    !cpf.match(
      /(^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$)|(^\d{2}\.?\d{3}\.?\d{3}\/\d{4}-?\d{2}$)/i
    )
  ) {
    return false;
  } else if (!cpfChecker(cpf)) {
    return false;
  }

  return true;
};
