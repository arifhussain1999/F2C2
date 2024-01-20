let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  arr.forEach(element => {
    if(element.profession==='developer')
  {
    console.log(element);
  }
  });
}

function addData() {
  //Write your code here, just console.log
  
  arr=arr.push({ id: 4, name: 'aniket', age: 24, profession: 'developer' });
  
}

function removeAdmin() {
  //Write your code here, just console.log
 arr= arr.filter(e=>{
    e.profession!='admin';
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  nums=[{ id: 5, name: 'arif', age: 24, profession: 'manager'}];
arr=arr.concat(nums);

}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
