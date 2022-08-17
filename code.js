function numSort(num) {
    let finalSum = 0;
    let a, b, sum = 0;
    if (num.length == 1) {
      finalSum = num[0]
      console.log(finalSum)
      return;
    }
    if (num.length == 2) {
      finalSum = num[0] + num[1]
      console.log(finalSum)
      return;
    }
    if (num.length > 2) {
      num.sort(function(a, b) {
        return a - b
      })
    }
    while (num.length > 1) {
      a = num[0];
      if (num[1]) {
        b = num[1];
      } else {
        b = 0;
      }
      sum = a + b;
      finalSum += sum;
      num = num.slice(2)
      let flag = false;
      let length = num.length;
      for (var k = length - 1; k >= 0 && num[k] > sum; k--) {
        num[k + 1] = num[k];
      }
      if (k == -1) {
        num[k + 1] = sum
        num.length = 1;
      } else {
        num[k + 1] = sum
      }
    }
    console.log(finalSum)
  }