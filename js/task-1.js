function slugify(title) {

    // переведення рядка у нижній регістр
    const lowerTitle = title.toLowerCase();

    // переведення рядка у масив розділяючи слова по пробілу
    const arrayFromString = lowerTitle.split(' ');

    // формуємо новий рядок, розділений тире
    const stringForSlugifi = arrayFromString.join("-");

    // повертвємо новий рядок
    return stringForSlugifi;
}

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


