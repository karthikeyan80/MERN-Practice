/* Try to make the solution to this problem as efficiently as possible.
 Consider using loops that would allow you to type the fewest characters/commands. 
While you could simply print the even numbers, 
get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort. */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter((i)=>i%2==0);
console.log(even);
