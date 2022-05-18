function chunk(array, size) {
  const chunked = [];
  for (element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }
  return chunked;
}

console.log(chunk([1,2,3], 2))