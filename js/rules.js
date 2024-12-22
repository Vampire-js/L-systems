const rules = []

rules[0] = {
  a: "X",
  b: "F[-X][X]F[+FX]-X" // Create a structure with branches that diverge
};

// Rule for branching to create denser ends
rules[1] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]" // Adds branches at the tips to create fullness
};

