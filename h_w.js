function getTypeOfNumbers() {
  const arr = [0, null, NaN, 0, 0, 1, 3, 4, 'str', 5]

  let even = 0,
      odd = 0,
      zero = 0;

  for(let i = 0; i < arr.lenght; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
          zero += 1;
      } else if (arr[i] % 2 === 0){
          even += 1;
      } else {
          odd =+ 1;
      }
    }
  }

  console.log('четных элементов:', even)
  console.log('нечетных элементов:', odd)
  console.log('нулей:', zero)
}

getTypeOfNumbers()
