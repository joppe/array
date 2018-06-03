/**
 * Return the last element of an array
 */

export function last<T>(arr: Array<T>): T {
    if (arr.length === 0) {
        throw new Error('Empty array can not get last');
    }

    return arr[arr.length - 1];
}
