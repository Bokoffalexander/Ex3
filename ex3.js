/////////// Start of function ////////////
function dividersSimple(start, end) {
  let arr = []; //simple numbers

  for (let elem = start; elem <= end; elem++) {
    if (elem == 2) {
      arr.push(elem);
      continue;
    }

    let flag = true; // is simple
    let sqrt_num = Math.sqrt(elem);
    let len = Math.ceil(sqrt_num);

    for (let i = 2; i <= len; i++) {
      if (elem % i == 0) {
        flag = false;
        break;
      }
    }

    if (flag == true) {
      arr.push(elem);
    }
  } // end of for

  return arr;
}

/////////// End of function ////////////
//console.log(dividersSimple(2, 22));
