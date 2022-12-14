import rl from "readline-sync";

export function createLetter() {
  const error1 = "Minstens een fout gevonden. Begin opnieuw.\n";
  const error2 = "Kader is te breed. Begin opnieuw.\n";
  let result = "";

  console.log(
    "Beantwoord volgende vragen.\nLet op volgende zaken:\n- Postcode dient tussen 1000 en 9900 te zijn\n- Elk antwoord moet beantwoord worden en max 40 karakters bevatten\n\n"
  );

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
      console.log(error1);
      continue;
    }

    if (
      fName == "" ||
      lName == "" ||
      street == "" ||
      postal == "" ||
      city == ""
    ) {
      console.log(error1);
      continue;
    }
    if (line1.length > 40 || line2.length > 40 || line3.length > 40) {
      console.log(error2);
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

  return result;
}
