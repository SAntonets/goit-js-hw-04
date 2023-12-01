function filterArray(numbers, value) {

  // створюю новий масив для запису чисел
  let bigNumbers = [];

  // створюю цикл для numbers
  for (num of numbers) {

    // порівнюю число із масиву із заданою величиною, якщо воно більше, то записуюю до нового масиву.
    if (num > value) {
      bigNumbers.push(num);
    }
  }

  // повертаю масив чисел, які пройшли перевірку згідно з умовою задачі
  return bigNumbers;

}

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
