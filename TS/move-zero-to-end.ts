// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr: unknown[]) {
  const { arrayWithoutNulls, arrayOnlyNulls } = arr.reduce<{ arrayWithoutNulls: unknown[]; arrayOnlyNulls: number[] }>(
    (result, item) => {
      if (item === 0) {
        result.arrayOnlyNulls.push(item);
      } else {
        result.arrayWithoutNulls.push(item);
      }

      return result;
    },
    { arrayWithoutNulls: [], arrayOnlyNulls: [] },
  );

  return [...arrayWithoutNulls, ...arrayOnlyNulls];
}