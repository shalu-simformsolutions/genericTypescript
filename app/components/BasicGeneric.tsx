// Basic example of generic

export function getValue(val: boolean | number): boolean | number {
  return val;
}

function getAnyTypeValue(val: any): any {
  return val;
}

//calling a default func
getAnyTypeValue(true); // output: true

function getMultipleTypeValues<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: string;
}

//calling a generic func
getMultipleTypeValues<Bottle>({ brand: 'tupperware', type: 'plastic' }); // output : {"brand": "tupperware", "type": "plastic"}
