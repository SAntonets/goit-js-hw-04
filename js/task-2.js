function makeArray(firstArray, secondArray, maxLength) {

    // об'єднуємо два масиви в один
    let unitedArray = [].concat(firstArray, secondArray);

    // перевіряємо довжину нового масиву і проводимо усікання об'єднаного масиу якщо умова виконується та перезаписуємо значення об'єднаного масиву 
    if (unitedArray.length > maxLength) {
        const cutArray = unitedArray.slice(0, maxLength);
        unitedArray = cutArray;
    }
  

    // повертаємо об'єднаний масив    
    return unitedArray
}

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
