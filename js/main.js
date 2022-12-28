const arrayOne = ['Milan', 'London', 'Warsaw', 'Kyiv', 'Odessa', 'New York'];
const arrayTwo = ['Beijin', 'Singapore', 'Warsaw', 'Odessa', 'Astana'];

const newJointArray = arrayOne.concat(arrayTwo); 

function uniqueElements(array){
    const uniqueArray = [];
    if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(!(uniqueArray.includes(element))){
                uniqueArray.push(element);
            }
        }
    } else {
        console.log ('The input is not an array. Please try again');
    }
    return uniqueArray;
}; 

console.log(uniqueElements(newJointArray));
