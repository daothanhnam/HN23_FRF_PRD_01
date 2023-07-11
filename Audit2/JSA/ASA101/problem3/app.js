function reverse(s) {
  const words = s.split("_");
  var pascalCase = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return pascalCase.join("");
}
console.log(reverse("user_name"));
