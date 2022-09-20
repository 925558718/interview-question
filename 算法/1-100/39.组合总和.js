var combinationSum = function (candidates, target) {
  let res = [];
  help(target, candidates, res, 0, []);
  return res;
};

function help(target, candidates, res, start, out) {
  if (target < 0) return;
  if (0 == target) {
    res.push(out);
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    help(target - candidates[i], candidates, res, i, out.concat(candidates[i]));
  }
}
console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8));
