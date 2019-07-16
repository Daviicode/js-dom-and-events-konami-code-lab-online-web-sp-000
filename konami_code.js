const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key)
    if (key === code[index]) {
      index++;

    }
      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
init()

/// runing learn or mocha.run() in command gives error
///online solution still failing to run learn 
// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//
// function init() {
//   var index = 0
//   document.body.addEventListener('keydown', onKeyDownHandler);
// }
//
// function onKeyDownHandler(e) {
//     const key = parseInt(e.detail || e.which)
//     console.log('key', key)
//     if (key === code[index]) {
//       index++
//
//        if (index === code.length) {
//         alert("YOU DID IT!")
//         index = 0
//       }
//     } else {
//       index = 0
//     }
//   }
// }
//
//
//  init();
