var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates = candidates.sort((a, b) => a - b);
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
    if (i > start && candidates[i] == candidates[i - 1]) continue;
    help(target - candidates[i], candidates, res, i+1, out.concat(candidates[i]));
  }
}
