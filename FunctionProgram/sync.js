
//Sync:It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event-loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then javascript automatically wraps it in a promise which is resolved with its value.


const getData = async() => {
    var data = "Hello World";
    return data;
}
  
getData().then(data => console.log(data));






//practiceprogram2


async function fn() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Done!"), 1000)
    });
    let res = await promise; // wait until the promise resolves (*)
    console.log(res); // result:  "Done!"
  }
  fn();

  




  async function example() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 2000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  example();




