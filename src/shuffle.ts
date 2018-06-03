import { rand } from '@apestaartje/number';

/**
 * Shuffle the elements of an array
 */

export function shuffle<T>(arr: Array<T>): Array<T> {
    let currentIndex: number = arr.length;
    const copy: Array<T> = [...arr];

    while (currentIndex !== 0) {
        const randomIndex: number = Math.floor(rand() * currentIndex);

        currentIndex -= 1;

        const temporaryValue: T = copy[currentIndex];
        copy[currentIndex] = copy[randomIndex];
        copy[randomIndex] = temporaryValue;
    }

    return copy;
}
