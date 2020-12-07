var fs = require("fs");

// Part 1
function findClosestIntersect() {
  const cables = fs.readFileSync("input.txt", "utf8").split(/\n/g);
  const cableMap = {};
  const cable1Split = cables[0].split(/,/);
  var row = 0;
  var col = 0;
  cableMap[0] = [];
  // Chart first cable
  cable1Split.forEach((direction) => {
    const iterate = parseInt(direction.substring(1));
    for (var i = 0; i < iterate; i++) {
      if (cableMap[row] == undefined) cableMap[row] = [];
      if (!cableMap[row].includes(col)) cableMap[row].push(col);
      switch (direction.charAt(0)) {
        case "U":
          row--;
          break;
        case "D":
          row++;
          break;
        case "L":
          col--;
          break;
        case "R":
          col++;
          break;
        default:
          console.log("Shouldn't be here!");
          return;
      }
    }
  });

  const cable2Split = cables[1].split(/,/);
  const intersections = [];
  row = 0;
  col = 0;
  cable2Split.forEach((direction) => {
    const iterate = parseInt(direction.substring(1));
    for (var i = 0; i < iterate; i++) {
      if (cableMap[row] !== undefined && cableMap[row].includes(col))
        intersections.push([row, col]);
      switch (direction.charAt(0)) {
        case "U":
          row--;
          break;
        case "D":
          row++;
          break;
        case "L":
          col--;
          break;
        case "R":
          col++;
          break;
        default:
          console.log("Shouldn't be here!");
          return;
      }
    }
  });

  var closest = Number.MAX_SAFE_INTEGER;
  intersections.forEach((intersection) => {
    const len = Math.abs(intersection[0]) + Math.abs(intersection[1]);
    if (len < closest && (intersection[0] !== 0 && intersection[1] !== 0)) closest = len;
  });

  return closest;
}

console.log(findClosestIntersect());
