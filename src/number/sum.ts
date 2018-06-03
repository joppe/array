/**
 * Add the values of an array
 */

export function sum(arr: Array<number>): number {
    return arr.reduce(
        (total: number, el: number): number => {
            return total + el;
        },
        0
    );
}
