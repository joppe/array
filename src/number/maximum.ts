/**
 * Return the maximum value of a given array of numbers
 */

export function maximum(arr: Array<number>): number {
    if (arr.length === 0) {
        throw new Error('Minimun could not be calculated from an empty array');
    }

    return Math.max(...arr);
}
