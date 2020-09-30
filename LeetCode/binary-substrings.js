var queryString = function(S, N) {
  let verdict = true
  let i = 1;
  while (verdict && (i <= N)) {
    const binded = i.toString(2)
    if (!(S.match(new RegExp(binded)))) {
        verdict = false
    }
    i++
  }
  return verdict
};