const arr = [{name: 'John', age: 13},
{name: 'Ann', age: 15},
{name: 'Kriss', age: 20},
{name: 'Max', age: 27}

];
function binarySearch (arr, age) {
   let first = 0;
   let last = arr.length - 1;
   while (first <= last) {
      const mid = Math.floor ((first + last) / 2);
       if (arr[mid].age===age) {
         return arr[mid].name; 
      }
      else if (arr[mid].age<age) {
        first = mid + 1;
    
      }
      else {
         last = mid - 1;
      };
   };
   return -1
};
console.log (binarySearch (arr, 20));