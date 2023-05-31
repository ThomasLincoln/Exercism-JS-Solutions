export let kind;
export function needsLicense(kind) {
  return (kind == 'car' || kind =='truck');
}


export let option1;
export let option2;
export function chooseVehicle(option1, option2) {
  if(option1 > option2){
    return `${option2} is clearly the better choice.`
  }else{
    return `${option1} is clearly the better choice.`
  }
}

export let originalPrice;
export let age;

export function calculateResellPrice(originalPrice, age) {
  if(age < 3){
    return (originalPrice - (originalPrice / 100) * 20);
  }else if(age >= 3 && age <= 10){
    return (originalPrice - (originalPrice / 100) * 30);
  }else{
    return (originalPrice - (originalPrice / 100) * 50);
  }
}
