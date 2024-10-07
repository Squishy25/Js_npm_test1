export function sayhi(firstName, lastName, course) {
  console.log(`Welcome ${firstName} ${lastName} to the ${course} course at Georgian College!`);
}

export function temperature(celsius) {
  return (celsius * 9/5) + 32;
}

export function squareroot(number) {
  return Math.sqrt(number);
}

export function randompasswrod(length) {
  const test = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let passwrd = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * test.length);
    passwrd += test[randomIndex];
  }
  return passwrd;
}