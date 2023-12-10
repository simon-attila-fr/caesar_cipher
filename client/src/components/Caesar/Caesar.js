export default function Caesar(phrase, shifting) {
  // Reference string
  let alphabet = "abcdefghijklmnopqrstuvwxyz ";

  //EDGE CASES ---------------------------------------
  // 1 - Argument types
  if (typeof phrase !== "string") {
    throw new Error("The first argument should be a string.");
  }
  if (typeof shifting !== "number") {
    throw new Error("The second argument should be a number.");
  }
  // 2 - Special characters
  if (phrase.split("").filter(charCodeFilter).length > 0) {
    throw new Error(
      "Accepted characters: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
    );
  }
  // 3 - Decimals
  shifting = Math.round(shifting);

  // FUNCTIONS --------------------------------------

  function charCodeFilter(letter) {
    return letter.charCodeAt(0) < 32 ||
    (letter.charCodeAt(0) > 32 && letter.charCodeAt(0) < 97) ||
      letter.charCodeAt(0) > 122
      ? letter
      : null;
  }

  function shiftingNormalizer(num) {
    return num > 27 || num < -27 ? num % 27 : num;
  }

  function findIndex(str) {
    return str.split("").map((e) => alphabet.indexOf(e));
  }

  function indexNormalizer(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 26) {
        arr[i] = arr[i] - 27;
      }
      if (arr[i] < 0) {
        arr[i] = arr[i] + 27;
      }
    }
    return arr;
  }

  // EXECUTION ---------------------------------------------

  try {
    shifting = shiftingNormalizer(shifting);
    const indexes = findIndex(phrase);

    let indexShift = indexes.map((e) => e + shifting);
    indexShift = indexNormalizer(indexShift);

    return indexShift.map((e) => alphabet[e]).join("");
  } catch (err) {
    console.err(err);
  }
}
