export const revealed = (
    arr: any[][],
    x: number,
    y: number,
    newNonMinesCount: number,
) => {
    console.log(arr[x][y]);
    if (arr[x][y].revealed) {
        return;
    }

    let flipped = [];
    flipped.push(arr[x][y]);

    while (flipped.length !== 0) {
        let single = flipped.pop();

        if (!single.revealed) {
            newNonMinesCount--;
            single.revealed = true;
        }

        if (single.value !== 0) {
            break;
        }

        // Top Left
        if (
            single.x > 0 &&
            single.y > 0 &&
            arr[single.x - 1][single.y - 1].value === 0 &&
            !arr[single.x - 1][single.y - 1].revealed
        ) {
            flipped.push(arr[single.x - 1][single.y - 1]);
        }

        // Bottom Right
        if (
            single.x < arr.length - 1 &&
            single.y < arr[0].length - 1 &&
            arr[single.x + 1][single.y + 1].value === 0 &&
            !arr[single.x + 1][single.y + 1].revealed
        ) {
            flipped.push(arr[single.x + 1][single.y + 1]);
        }

        // Bottom Left
        if (
            single.x < arr.length - 1 &&
            single.y > 0 &&
            arr[single.x + 1][single.y - 1].value === 0 &&
            !arr[single.x + 1][single.y - 1].revealed
        ) {
            flipped.push(arr[single.x + 1][single.y - 1]);
        }

        // Top Right
        if (
            single.x > 0 &&
            single.y < arr[0].length - 1 &&
            arr[single.x - 1][single.y + 1].value === 0 &&
            !arr[single.x - 1][single.y + 1].revealed
        ) {
            flipped.push(arr[single.x - 1][single.y + 1]);
        }

        // Top
        if (
            single.x > 0 &&
            arr[single.x - 1][single.y].value === 0 &&
            !arr[single.x - 1][single.y].revealed
        ) {
            flipped.push(arr[single.x - 1][single.y]);
        }

        // Bottom
        if (
            single.x < arr.length - 1 &&
            arr[single.x + 1][single.y].value === 0 &&
            !arr[single.x + 1][single.y].revealed
        ) {
            flipped.push(arr[single.x + 1][single.y]);
        }

        // Left
        if (
            single.y > 0 &&
            arr[single.x][single.y - 1].value === 0 &&
            !arr[single.x][single.y - 1].revealed
        ) {
            flipped.push(arr[single.x][single.y - 1]);
        }

        // Right
        if (
            single.y < arr[0].length - 1 &&
            arr[single.x][single.y + 1].value === 0 &&
            !arr[single.x][single.y + 1].revealed
        ) {
            flipped.push(arr[single.x][single.y + 1]);
        }

        // Reveal neighboring cells

        // Top Left
        if (
            single.x > 0 &&
            single.y > 0 &&
            !arr[single.x - 1][single.y - 1].revealed
        ) {
            arr[single.x - 1][single.y - 1].revealed = true;
            newNonMinesCount--;
        }

        // Left
        if (single.y > 0 && !arr[single.x][single.y - 1].revealed) {
            arr[single.x][single.y - 1].revealed = true;
            newNonMinesCount--;
        }

        // Bottom Left
        if (
            single.x < arr.length - 1 &&
            single.y > 0 &&
            !arr[single.x + 1][single.y - 1].revealed
        ) {
            arr[single.x + 1][single.y - 1].revealed = true;
            newNonMinesCount--;
        }

        // Top
        if (single.x > 0 && !arr[single.x - 1][single.y].revealed) {
            arr[single.x - 1][single.y].revealed = true;
            newNonMinesCount--;
        }

        // Bottom
        if (
            single.x < arr.length - 1 &&
            !arr[single.x + 1][single.y].revealed
        ) {
            arr[single.x + 1][single.y].revealed = true;
            newNonMinesCount--;
        }

        // Top Right
        if (
            single.x > 0 &&
            single.y < arr[0].length - 1 &&
            !arr[single.x - 1][single.y + 1].revealed
        ) {
            arr[single.x - 1][single.y + 1].revealed = true;
            newNonMinesCount--;
        }

        // Right
        if (
            single.y < arr[0].length - 1 &&
            !arr[single.x][single.y + 1].revealed
        ) {
            arr[single.x][single.y + 1].revealed = true;
            newNonMinesCount--;
        }

        // Bottom Right
        if (
            single.x < arr.length - 1 &&
            single.y < arr[0].length - 1 &&
            !arr[single.x + 1][single.y + 1].revealed
        ) {
            arr[single.x + 1][single.y + 1].revealed = true;
            newNonMinesCount--;
        }
    }

    return {arr, newNonMinesCount};
};
