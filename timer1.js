const timer = (array) => {
  let sorted = array.sort((a, b) => a - b);
  // console.log(time);
  // let time = 0;
   
  for( const time of sorted){
    console.log(time);
    setTimeout(()=> {
      process.stdout.write(`Printing delay : ${time}00 ms\n`)
      // console.log(`Printing delay : ${time}ms`)
    }, time*100)
  }
  
  // for (let i = 0; i < sorted.length; i++) {
  //   // console.log("What we're working with:",i, time[i]);
  //   time += sorted[i];
  //   console.log(time)
  //   setTimeout(()=> {
  //     process.stdout.write(`Printing delay : ${time}ms\n`)
  //     // console.log(`Printing delay : ${time}ms`)
  //   }, time)
  //   // let beep = setTimeOut(() => {
  //   //   process.stdout.write('\x07');
  //   // }, time[i]);
    
  // }
  // for (let i = 0; i < array.length; i++) {
  //   time += setInterval(() => {
  //     process.stdout.write(`\r${array[i]}  \n`);
  //   }, time);
  // }
  // console.log(time);
};
timer([10, 3, 5, 15, 9]);
