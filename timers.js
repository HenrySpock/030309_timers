// countdown: 
function countdown(num) {
    let timer = setInterval(() => console.log(num-- || "DONE!"), 1000);
    setTimeout(() => clearInterval(timer), (num + 1) * 1000);
  }

<!-- randomGame: -->
function randomGame() {
  let counter = 0;  
  const timer = setInterval(() => {
    const random = Math.random().toFixed(2);  
    console.log(random);  
    counter++; 
    if (random > 0.75) {  
      clearInterval(timer);
      console.log(`It took ${counter} tries to find a number greater than 0.75.`);
    }
  }, 1000);
}