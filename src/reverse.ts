/**
 * Reverse an array without modifying the original
 */

export function reverse<T>(arr: Array<T>): T[] {
    if (arr.length === 0) {
        throw new Error('Empty array can not get head');
    }

    return arr.reduce(
        (acc: Array<T>, el: T): Array<T> => {
            return [el].concat(acc);
        },
        []
    );
}
