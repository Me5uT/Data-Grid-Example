export function copyAndSort<T>(
  items: T[],
  columnKey: string,
  isSortedDescending: boolean
): T[] {
  const key = columnKey as keyof T;

  return items
    .slice(0)
    .sort((a: T, b: T) =>
      isSortedDescending ? (a[key] < b[key] ? 1 : -1) : a[key] > b[key] ? 1 : -1
    );
}
