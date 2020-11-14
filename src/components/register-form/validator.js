// checks if the date of birth is in the future,
// the number of days according to month
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
