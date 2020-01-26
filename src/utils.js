export const mergeSort = arr => {
    if(arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left),mergeSort(right));
}

const merge = (left, right) => {
    const results = [];

    while (left.length && right.length) {
        if (left[0].apdex > right[0].apdex) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

  return [...results, ...left, ...right];
}