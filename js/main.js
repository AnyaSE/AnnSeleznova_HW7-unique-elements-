const arrayOne = ['Milan', 'London', 'Warsaw', 'Kyiv', 'Odessa', 'New York'];
const arrayTwo = ['Beijin', 'Singapore', 'Warsaw', 'Odessa', 'Astana'];

const uniqueArray = [];

function uniqueElements(array){
    if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)){
        for (let i = 0; i < arrayOne.length; i++) {
            const element = arrayOne [i];
            if(!(arrayTwo.includes(element))){
                uniqueArray.push(element);
            }
        }
        for (let b = 0; b < arrayTwo.length; b++) {
            const number = arrayTwo [b];
            if(!(arrayOne.includes(number))){
                uniqueArray.push(number);
            }
        }
    } else {
        console.log ('The input is not an array. Please try again');
    }
    return uniqueArray;
};

console.log(uniqueElements(uniqueArray));