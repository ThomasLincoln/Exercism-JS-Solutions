export let knightIsAwake = true;

export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

export let archerIsAwake = true;
export let prisonerIsAwake = true;
knightIsAwake = false;
archerIsAwake = true;
prisonerIsAwake = false;

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

archerIsAwake = false;
prisonerIsAwake = true;

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return (!archerIsAwake && prisonerIsAwake);
}

export let petDogIsPresent = true;

knightIsAwake = false;
archerIsAwake = true;
prisonerIsAwake = false;
petDogIsPresent = false;

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (petDogIsPresent && !archerIsAwake || (!petDogIsPresent && prisonerIsAwake && !archerIsAwake && !knightIsAwake))
  }

