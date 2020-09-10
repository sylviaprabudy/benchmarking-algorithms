const Benchmark = require('benchmark');
// const { bubbleSort } = require('./sort');
// const { quickSort } = require('./sort');
const { mostDuplicates } = require('./dupes');
const { optimizedDuplicates } = require('./dupes');

const numbers = [];
for (let i = 0; i < 10000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
  .add('duplicates test', function() {
    mostDuplicates(numbers);
  })
  .add('optimized duplicates test', function() {
    optimizedDuplicates(numbers);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();

// suite
//   .add('quick sort', function() {
//     const testArray = [...numbers];

//     quickSort(testArray);
//   })
//   .add('js sort', function() {
//     const testArray = [...numbers];

//     // benchmark the built-in sort method
//     testArray.sort((a, b) => {
//       return a - b;
//     });
//   })
//   .on('complete', function() {
//     this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
//   })
//   .run();

