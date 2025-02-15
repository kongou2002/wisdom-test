const TABLE_SIZE = 5;

const hashFunction = (key: string): number => key.charCodeAt(0) % TABLE_SIZE;

const createHashTable = (): Map<number, [string, number][]> =>
  new Map(Array.from({ length: TABLE_SIZE }, (_, i) => [i, []]));

const insert = (table: Map<number, [string, number][]>, key: string, value: number): Map<number, [string, number][]> => {
  const index = hashFunction(key);
  table.get(index)?.unshift([key, value]);
  return table;
};

const search = (table: Map<number, [string, number][]>, key: string): number | null => {
  const index = hashFunction(key);
  return table.get(index)?.find(([storedKey]) => storedKey === key)?.[1] ?? null;
};

const display = (table: Map<number, [string, number][]>): void => {
  table.forEach((bucket, i) => {
    console.log(`Bucket ${i}:`, bucket.map(([k, v]) => `[${k} -> ${v}]`).join(" "));
  });
};

export const Searching = () => {
  let table = createHashTable();

  const entries: [string, number][] = [
    ["S", 0], ["E", 1], ["A", 2], ["R", 3], ["C", 4],
    ["H", 5], ["X", 7], ["M", 9], ["P", 10], ["L", 11]
  ];

  entries.forEach(([key, value]) => (table = insert(table, key, value)));
  display(table);

  const searchKey = "C";
  const result = search(table, searchKey);
  console.log(result !== null ? `\nKey ${searchKey} found with value: ${result}` : `\nKey ${searchKey} not found.`);
};
