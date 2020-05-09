var number = function(busStops){
    let sum = 0;
  
  for (let i= 0; i < busStops.length; i++){
    let Stop = busStops[i];
    let getOn = Stop[0]; 
    let getOff = Stop[1] 
  
    sum += getOn;
    sum -= getOff;
    }
    return sum;
  }