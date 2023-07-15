let num = 1;
export default num;

export enum Direction {
  UP = "up",
  DOWN = "down",
}
export function toArray<T>(a: T): T[] {
  return [a];
}
