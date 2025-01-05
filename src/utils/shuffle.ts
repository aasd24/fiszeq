function shuffle<T>(array: T[]): T[] {
    const arr = array.slice();

    let currentIndex = arr.length;

    while (currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    return arr;
}

export default shuffle;
