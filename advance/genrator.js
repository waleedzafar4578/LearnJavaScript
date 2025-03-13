function* evenNumber() {
    let num = 0;
    while (true) {
        yield num;
        num += 2; // Increase by 2 for even numbers

        if (num >= 10) { // Stop after reaching 10
            return;
        }
    }
}

let n = evenNumber();
while (true) {
    let re = confirm(`Even Number: ${n.next().value} Check Next?`);
    if (!re) {
        break;
    }
}
