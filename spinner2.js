let spin = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 100;

for (let char of spin) {
  setTimeout(() => {process.stdout.write(`\r${char} `)}, delay)
  delay += 200;
};
setTimeout(() => {process.stdout.write("\n")}, 2000) 


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);

// setTimeout(() => {
//   console.log(" ");
// }, 1800)