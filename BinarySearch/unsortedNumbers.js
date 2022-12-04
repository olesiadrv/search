const arr = [4, 9, 5, 11, 45, 33, 21, 7, 29];
for (let j = arr.length -1; j>0; j--)
    for (let i=0; i<arr.length -1; i++) {
        if (arr[i]>arr[i+1]) {
            let p=arr[i]
            arr [i]=arr[i+1]
            arr [i+1]=p
        }
    }

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