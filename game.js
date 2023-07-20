// let timerValue = 7;
// let questionCounter = 0;
// let score = 0;

// const updateTimerDisplay = () => {
//   const timerElement = document.getElementById('timer');
//   timerElement.innerHTML = `Timer: ${timerValue} seconds`;

//   timerValue--;

//   if (timerValue < 0) {
//     timerValue = 7;
//     if (questionCounter < 5) {
//       fun();
//     } else {
//       // Game finished, display final score or perform any other actions
//     }
//   }

//   setTimeout(updateTimerDisplay, 1000);
// };

// const fun = ()=>{
// const words = ["excite", "happy", "head", "enthusiastic", "growth", "water"];

// function geti(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let question_index = geti(0, 5);
// document.getElementById('q').innerHTML ="ans is" + words[question_index]+" is :";

// let count = 0;
// let option_text_index = [];

// while (count < 4) {
//   let j = geti(0, 5);

//   if (j !== question_index && !option_text_index.includes(j)) {
//     option_text_index.push(j);
//     count++;
//   }
// }

// let arr = [];
// arr[0] = document.getElementById("option0");
// arr[1] = document.getElementById("option1");
// arr[2] = document.getElementById("option2");
// arr[3] = document.getElementById("option3");

// const syn = (i) => {
//   return new Promise((resolve, reject) => {
//     fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${i}?key=b3b73004-8412-455e-a40a-2cfb3d87e9ee`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Sorry! Word not available');
//         }
//         return response.json();
//       })
//       .then(value => {
//         let t = value[0]["meta"]["syns"][0];
//         resolve(t[0]);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

// let synonymPromises = option_text_index.map(index => syn(words[index]));

// Promise.all(synonymPromises)
//   .then(synonyms => {
//     for (let s = 0; s < 4; s++) {
//       arr[s].innerHTML = synonyms[s];
//     }

//     let ran_index = [];
//     count = 0;

//     while (count < 4) {
//       let j = geti(0, 3);

//       if (!ran_index.includes(j)) {
//         ran_index.push(j);
//         count++;
//       }
//     }

//     syn(words[question_index])
//       .then(synonym => {
//         let k = geti(0, 3);
//         arr[k].innerHTML = synonym;
//         let check = 0;
//         for (let i = 0; i < 4; i++) 
//         {
//             if(check!=1)
//             {
//                 arr[ran_index[i]].onclick = () => 
//                 {
//                     check = 1;
//                     if (arr[ran_index[i]].innerHTML === synonym) 
//                     {
//                         arr[ran_index[i]].style.backgroundColor = "green";
                        // let x = document.getElementById('score');
                        // let y = parseInt(x.innerHTML);
                        // x.innerHTML = 1+y;
//                     } 
//                     else 
//                     {
//                         arr[ran_index[i]].style.backgroundColor = "red";
//                         arr[k].style.backgroundColor = "green";
//                     }
//                 }
//             } 
//         }
        // for(let k=0; k<4; k++) 
        // {
        //   arr[ran_index[k]].style.backgroundColor = "white";
        // }
//       });
//   })
//   .catch(error => {
//     console.log('Error:', error.message);
//   });

// }
// updateTimerDisplay();
// fun();





let timerValue = 5;
let questionCounter = 0;
let score = 0;

const yoyo = ()=>{};

const updateTimer = () => {
  const timer = document.getElementById('timer');
  timer.innerHTML = `Timer: ${timerValue} seconds`;

  timerValue--;

  if (timerValue < 0) {
    
    if (questionCounter < 5) {
      fun();
      timerValue = 5;
    } else {
      document.getElementsByClassName('set')[0].innerHTML = ''
      const h1Element = document.createElement('h1');
      h1Element.innerHTML = score;

      const containerElement = document.getElementById('container');
      containerElement.appendChild(h1Element);
    }
  }

  setTimeout(updateTimer, 1000);
};

const fun = () => {
  const words = ["excite", "happy", "head", "enthusiastic", "growth", "water"];

  function geti(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let question_index = geti(0, 5);
  document.getElementById('q').innerHTML = "What is the synonym for '" + words[question_index] + "'?";

  let count = 0;
  let option_text_index = [];

  while (count < 4) {
    let j = geti(0, 5);

    if (j !== question_index && !option_text_index.includes(j)) {
      option_text_index.push(j);
      count++;
    }
  }

  let arr = [];
  arr[0] = document.getElementById("option0");
  arr[1] = document.getElementById("option1");
  arr[2] = document.getElementById("option2");
  arr[3] = document.getElementById("option3");

  const syn = (i) => {
    return new Promise((resolve, reject) => {
      fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${i}?key=b3b73004-8412-455e-a40a-2cfb3d87e9ee`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Sorry! Word not available');
          }
          return response.json();
        })
        .then(value => {
          let t = value[0]["meta"]["syns"][0];
          resolve(t[0]);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  let synonymPromises = option_text_index.map(index => syn(words[index]));

  Promise.all(synonymPromises)
    .then(synonyms => {
      for (let s = 0; s < 4; s++) {
        arr[s].innerHTML = synonyms[s];
      }

      let ran_index = [];
      count = 0;

      while (count < 4) {
        let j = geti(0, 3);

        if (!ran_index.includes(j)) {
          ran_index.push(j);
          count++;
        }
      }

      syn(words[question_index])
        .then(synonym => {
          let k = geti(0, 3);
          arr[k].innerHTML = synonym;

          for (let i = 0; i < 4; i++) 
          {
            arr[ran_index[i]].onclick = () => 
            {
              if (arr[ran_index[i]].innerHTML === synonym) {
                arr[ran_index[i]].style.backgroundColor = "green";
                score++;
              } else {
                arr[ran_index[i]].style.backgroundColor = "red";
                arr[k].style.backgroundColor = "green";
              }

              questionCounter++;
            };
          }
          for(let k=0; k<4; k++) 
        {
          arr[ran_index[k]].style.backgroundColor = "white";
        }
        });
    })
};

updateTimer();
fun();