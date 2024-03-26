function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    // let number  = Math.random()
    // return (number>0.5 ? resolve(number): reject("regect"))
    resolve(data);
    // Simulating failure
    //reject(new Error('Failed to fetch data'));
    // reject("reject")
    }, 1000); // Simulating a delay of 2 seconds
    console.log("this is in promise")

    });
}
    // Consuming the Promise
   getData().then(data => {
        const result = data
        console.log("I am in promise");
        //return result
    })
    .catch(error => {
    console.error('Error:', error.message);
    });
    console.log("I am after promise");

    //console.log(getData())