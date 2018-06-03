/**
 * Take the first number of elements of a list
 */

export function take<T>(count: number, arr: Array<T>): Array<T> {
    return arr.slice(0, count);
}
