var fs = require("fs");

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
    switch (direction.charAt(0)) {
      case "U":
        for (var i = 0; i < iterate; i++) {
          if (cableMap[row - i] == undefined) cableMap[row - i] = [];
          if (!cableMap[row - i].includes) cableMap[row - i].push(col);
          row--;
        }
        break;
      case "D":
        for (var i = 0; i < iterate; i++) {
          if (cableMap[row + i] == undefined) cableMap[row + i] = [];
          if (!cableMap[row + i].includes) cableMap[row + i].push(col);
          row++;
        }
        row += iterate;
        break;
      case "L":
        if (cableMap[row] == undefined) cableMap[row] = [];
        for (var i = 0; i < iterate; i++) {
          if (!cableMap[row].includes) cableMap[row].push(--col);
        }
        col -= iterate;
        break;
      case "R":
        if (cableMap[row] == undefined) cableMap[row] = [];
        for (var i = 0; i < iterate; i++) {
          if (!cableMap[row].includes()) cableMap[row].push();
        }
        break;
      default:
        console.log("Shouldn't be here!");
        return;
    }
  });

  const cable2Split = cables[1].split(/,/);
  const intersections = [];
  row = 0;
  col = 0;
  cable2Split.forEach((direction) => {
    const iterate = parseInt(direction.substring(1));
    switch (direction.charAt(0)) {
      case "U":
        for (var i = 0; i < iterate; i++) {
          if (
            cableMap[row - i] !== undefined &&
            cableMap[row - i].includes(col)
          )
            intersections.push([row, col]);
          row--;
        }
        break;
      case "D":
        for (var i = 0; i < iterate; i++) {
          if (
            cableMap[row + i] !== undefined &&
            cableMap[row + i].includes(col)
          )
            intersections.push([row, col]);
          row++;
        }
        row += iterate;
        break;
      case "L":
        for (var i = 0; i < iterate; i++) {
          if (cableMap[row] !== undefined && cableMap[row].includes(col))
            intersections.push([row, col]);
          col--;
        }
        break;
      case "R":
        for (var i = 0; i < iterate; i++) {
          if (cableMap[row] !== undefined && cableMap[row].includes(col))
            intersections.push([row, col]);
          col++;
        }
        break;
      default:
        console.log("Shouldn't be here!");
        return;
    }
  });

  var closest = Number.MAX_SAFE_INTEGER;
  intersections.forEach((intersection) => {
    const len = Math.abs(intersection[0]) + Math.abs(intersection[1]);
    if (len < closest) closest = len;
  });

  return closest;
}

console.log(findClosestIntersect());
