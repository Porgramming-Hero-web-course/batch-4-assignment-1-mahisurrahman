{
  //

  const sumArray = (numbers: number[]): number => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  };

  console.log(sumArray([5,5,5]));

  //
}
