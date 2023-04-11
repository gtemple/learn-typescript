function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
  ): DataType[KeyType][] {
    return items.map((item) => item[key])
}

const dogs = [
  { name: "yarp", age: 12},
  { name: "LG", age: 13}
]

console.log(pluck(dogs, "age"))
console.log(pluck(dogs, "name"))

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCar: BaseEvent & { quantity: number; productID: string; },
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: string, data: unknown): void {
  console.log([name, data])
}

sendEvent("AddToCart", {productID: 'nom', user: "baz", quantity: 1, time: 5})