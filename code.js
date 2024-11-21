function f(k, nums) {
    if (k === 0) {
        return 0;
    }

    let res = 0;
    nums.sort((a, b) => a - b); // Sort numbers in ascending order
    let j = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            j = i + 1;
        }
        if (j <= k) {
            res = i + 1;
        }
    }

    return res;
}

const k = 4;
const nums = [20, 40, 60, 80, 100];

console.log(f(k, nums)); // Output the result
