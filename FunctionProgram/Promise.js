//Promise: 4 step
//1.resolve
//2.reject
//3.pending
//4.settled 




//PracticeProgram1

var promise = new Promise(function(resolve, reject) {
    const x = "Saurabh";
    const y = "Saurabh"
    if(x === y) {
      resolve();
    } else {
      //reject();
    }
  });
     
  promise.
      then(function () {
          console.log('Success, You are a Saurabh Yeggewar');
      }).
      catch(function () {
          console.log('Some error has occurred');
      });

   //PracticeProgram2

      var promise = new Promise(function(resolve, reject) { 
        /*declaring and defining two variables of const data type with same content.*/
        const a = "Hello there! My name is Saurabh and I am interested in computer Science."; 
        const b = " Hello there! My name is Saurabh and I am interested in computer Science.";
        //checking if both the content stored in variables are same or not
        if(a === b) { 
        //calling resolve 
        resolve(); 
        } else { 
        //calling reject
        reject(); } 
        }); 
        promise. 
        then(function () { 
        console.log('Promise Resolved!!'); 
        }). 
        catch(function () { 
        console.log('Promise Rejected!!'); 
        });


//practiceProgram3

        //resolving of promise
var promise = new Promise(function(resolve, reject) { 
    resolve('Success message is written here!'); 
    }) 
    promise 
    .then(function(successMessageishere) { 
    //success handling function is invoked 
    console.log(successMessageishere); 
    }, function(errorMessageishere) { 
    console.log(errorMessageishere); 
    })
    




    //PracticeProgram4


    const anotherPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('this is the eventual value the promise will return');
        }, 3000);
      });
      
      // CONTINUATION
      anotherPromise
      .then(value => { console.log(value) })


      


