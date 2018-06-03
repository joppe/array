/**
 * Remove the first number of elements of a list
 */

export function drop<T>(count: number, arr: Array<T>): Array<T> {
    return arr.slice(count);
}
