export let birdsPerDay = [];
export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for(let i = 0; i<birdsPerDay.length; i++){
    count += birdsPerDay[i];
  }
  return count;
}

export let week;
export function birdsInWeek(birdsPerDay, week) {
  const diaFinal = (week * 7);
  let diaInicial = diaFinal - 7;
  let count = 0;
  while(diaFinal != diaInicial){
    count = count + birdsPerDay[diaInicial];
    diaInicial++;
  }    

  return count;
}

export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i < birdsPerDay.length; i++){
    if(i % 2 == 0){
      birdsPerDay[i]++;
    }
  }

  return birdsPerDay;
}
