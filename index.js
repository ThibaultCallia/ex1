import rl from "readline-sync";

const error = "Minstens een fout gevonden. Begin opnieuw\n";
let result = "";

do {
  const fName = rl.question("First name?\n");
  const lName = rl.question("Last name?\n");
  const street = rl.question("Street and number?\n");
  const postal = rl.question("Postal code?\n");
  const city = rl.question("City\n");

  const line1 = `${fName.charAt(0).toUpperCase()}. ${lName}`;
  const line2 = `${street}`;
  const line3 = `${postal} ${city.toUpperCase()}`;

  if (postal < 1000 || postal > 9900 || isNaN(postal)) {
    console.log(error);
    continue;
  }

  if (line1.length > 40 || line2.length > 40 || line3.length > 40) {
    console.log(error);
    continue;
  }

  const size = Math.max(line1.length, line2.length, line3.length);
  const line = "-".repeat(size + 4);

  result = `${line}\n\| ${line1}${" ".repeat(
    line.length - line1.length - 3
  )}\|\n\| ${line2}${" ".repeat(
    line.length - line2.length - 3
  )}\|\n\| ${line3}${" ".repeat(line.length - line3.length - 3)}\|\n${line}`;
} while (result == "");

console.log(result);
