const arr = [3, 5, 13, 29, 31, 53, 55];
function binarySearch (arr, num) {
   let first = 0;
   let last = arr.length - 1;
   while(first <= last) {
      const mid = Math.floor((first + last) / 2);
       if(num === arr[mid]) {
         return mid; 
      }
      else if(num < arr[mid]) {
         last = mid - 1; 
      }
      else{
         first = mid + 1;
      };
   };
   return -1
};
console.log (binarySearch(arr, 4));