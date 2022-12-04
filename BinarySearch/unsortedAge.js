const arr = [ {name: 'John', age: 37},
{name: 'Oleg', age: 23},
{name: 'Linda', age: 45},
{name: 'Tom', age: 19}
];

for (let j = arr.length -1; j>0; j--)
    for (let i=0; i<arr.length -1; i++) {
        if (arr[i].age>arr[i+1].age) {
            let p=arr[i]
            arr [i]=arr[i+1]
            arr [i+1]=p
        }
    }

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
     console.log (binarySearch (arr, 45));