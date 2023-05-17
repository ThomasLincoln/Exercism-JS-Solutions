export const EXPECTED_MINUTES_IN_OVEN = 40;
export const tempoPorCamada = 2;

export function remainingMinutesInOven(tempoAtual){
  return EXPECTED_MINUTES_IN_OVEN - tempoAtual;
}

export function preparationTimeInMinutes(quantidadeDeCamada){
  return quantidadeDeCamada * tempoPorCamada;
}

export function totalTimeInMinutes(quantidadeDeCamada, tempoAtual){
  return tempoAtual + preparationTimeInMinutes(quantidadeDeCamada);
}
