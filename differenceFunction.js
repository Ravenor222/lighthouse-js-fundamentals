//A "difference" function to post what is not included in both
// "asymmetrical" difference

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }