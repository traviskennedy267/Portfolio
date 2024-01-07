"use strict;";

const form = document.forms[0];
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.innerHTML = [...form.plaintext.value]
    .map((char) => encrypt(char))
    .join("");
});

function encrypt(char) {
  const shift = Number(form.cypher.value);
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !@#$%^&*()-=_+[]{}|;':,.<>?/`~";

  if (characters.includes(char)) {
    const position = characters.indexOf(char);
    const newPosition = (position + shift) % characters.length;
    return characters[newPosition];
  } else {
    return char;
  }
}
