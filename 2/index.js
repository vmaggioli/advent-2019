var fs = require("fs");

function intMachine(input1, input2) {
  const inputs = fs.readFileSync("input.txt", "utf8").split(/,/g);
  inputs[1] = `${input1}`;
  inputs[2] = `${input2}`;
  var index = 0;
  while (index < inputs.length) {
    switch (inputs[index]) {
      case "99":
        return inputs[0];
      case "1":
        inputs[inputs[index + 3]] = `${
          parseInt(inputs[inputs[index + 1]]) +
          parseInt(inputs[inputs[index + 2]])
        }`;
        break;
      case "2":
        inputs[inputs[index + 3]] = `${
          parseInt(inputs[inputs[index + 1]]) *
          parseInt(inputs[inputs[index + 2]])
        }`;
        break;
      default:
        console.log("Shouldn't be here!");
        return -1;
    }

    index += 4;
  }

  return -1;
}

function findSolution() {
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
      if (intMachine(i, j) == 19690720) return 100 * i + j;
    }
  }
}

console.log(findSolution());
