interface Cat {
  name: string;
  breed: string;
}

type ReadOnlyCat = ReadOnly<Cat>;

function makeCat(name: string, breed: string): ReadOnlyCat {
  return {
    name,
    breed
  }
}

const usul = makeCat("Usul", "Tabby")
//usul.name = "Piter";

function makeCoordinate(
  x: number,
  y: number,
  z: number
  ): readonly [number, number, number] {
    return [x, y, z]
}

const c1 = makeCoordinate(10, 20, 30);

// makes it so all elements of the array are also constant. it becomes immutable
const reallyConst = [1, 2, 3] as const;
