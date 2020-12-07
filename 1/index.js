var fs = require('fs');

function getTotalFuel() {
    const modules = fs.readFileSync('input.txt', 'utf8').split(/\n/g);
    var totalFuel = 0;
    modules.forEach(module => {
        module = parseInt(module)
        var fuel = 0;
        do {
            const toAdd = Math.floor(module / 3) - 2;
            if (toAdd >= 0)     fuel += toAdd;
            module = toAdd;
        } while (module > 0);

        totalFuel += fuel;
    });
    return totalFuel;
}

console.log(getTotalFuel());
