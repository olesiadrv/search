const mass = [
    { index: 21, userName: 'John', age: 44, occupation: 'plumber' },
    { index: 14, userName: 'Kriss', age: 17, occupation: 'designer' },
    { index: 34, userName: 'Ann', age: 20, occupation: 'teacher' },
    { index: 26, userName: 'Max', age: 19, occupation: 'driver' },
    { index: 33, userName: 'Tom', age: 28, occupation: 'doctor' }
  ]
  
  function linearSearch (arr, mass){
    for (let i = 0; i < arr.length; i++){
      if (arr[i]. index === mass){
        console.log (arr[i]);
        return i;
      }
    }
    return -1;
  }
  
  console.log (linearSearch(mass, 21));