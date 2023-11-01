//This area will be for doing codewars
// var humanYearsCatYearsDogYears = function(humanYears) {
//     // Your code here!
//     //1 hy = 15 cy = 15 dy
//     //2 hy = 9 cy = 9 dy
//     //3+ hy = 4cy = 5 d
    
//     //if 1 then cy = 15 and dy = 15
//     //if 2 then cy = 24 and dy = 24
//     //if 3+ then cy = 24+(4 * (h-2)) and dy 24 + (5 * (h-2))
//     let cy = 0
//     let dy = 0
//     if(humanYears === 1){
//       cy = 15
//       dy = 15
//     } else if(humanYears === 2){
//       cy = 24 
//       dy = 24
//     } else {cy = 24 + (4 * (humanYears - 2))
//             dy = 24 + (5 * (humanYears - 2))}
    
//     return [humanYears, cy, dy];
//   }