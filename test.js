function minMaxSum(arr) {
  arr = arr.sort();

  const min = arr.slice(0, 4).reduce((a, c) => a + c);
  const max = arr.slice(-4);

  console.log(min, max);
}

minMaxSum([1, 2, 3, 5, 4]);
