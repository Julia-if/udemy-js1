// // // const numberOfFilms = +prompt("How many movies did you watch?","");
// // //  const personalMovieDB ={
// // //     count: numberOfFilms,
// // //     movies:{},
// // //     actors:{},
// // //     genres:[],
// // //     privat: false,
// // //  };
// // //  const lastMovie = prompt('Last movie?','');
// // //  const level =prompt('Level?','');
// // //  const lastMovieL = prompt('Last movie?','');
// // //  const levelL =prompt('Level?','');
// // //  personalMovieDB.movies[lastMovie]=level;
// // //  personalMovieDB.movies[lastMovieL]=levelL;
// // //  console.log(personalMovieDB);
// // //  console.log( 25 || null && !3 );

// // //  console.log( NaN || null && !3 && undefined || 5);

// // //  console.log( 5 === 5 && 3 > 1 || 5);
 
// // //  let hamburger;
// // //  const fries = NaN;
// // //  const cola = 0;
// // //  const nuggets = 2;
  
// // //  if (hamburger && cola || fries === 3 && nuggets) {
// // //     console.log('Done!')
// // //  }
// //  let result='';
// //  const length=7;
// //  for (let i=1; i<length; i++){
// //     for (let j=1; j<i; j++){
// //         result +='*';
// //     }
// //     result +='\n';
// //  }
// //  console.log(result);

// //  function secondTask() {
// //     // Пишем решение вот тут
// //     for(let i=20; i>=10; i=-1){
        
// //         if(i===13){
// //             break;
// //         }
// //         console.log(i)
// //     }
    
// // }

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs(plan){
//         return `'Мне ${plan.age} и я владею языками: ${plan.skills.languages}'`
//     },
// };

// function showExperience(plan) {
// return plan.skills.exp;
// }

// function showProgrammingLangs(plan) {
// const {js, php}=plan.skills.programmingLangs;
// return `"Язык js изучен на ${js} Язык php изучен на ${php}"`
// }


// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));



function pow(x, n) {
    let result=1;
    for (let index = 0; index < n; index++) {
        result*=x;
        
    }
    return result;
}


console.log(pow(2,1));
console.log(pow(2,2));
console.log(pow(2,3));