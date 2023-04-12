interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

// interface MyUserOptionals {
//   name?: string;
//   id?: string;  
//   email?: string;
// }

type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides
  }
}

console.log(merge({
  name: "Jack",
  id: "foo",
  email: "fakefake@gmail.com"
}, {email: "differentfake@hotmail.com"}))

type RequiredMyUser = Required<MyUser>;

type JustEmailAndNAme = Pick<MyUser, "email" | "name">;

const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a, v) => {
    const { id, ...other } =v
    return {
      ...a,
      [id]: other,
    }
  }, {})
}

console.log(mapById([
  {
    id: "yo",
    name: "sup"
  },
  {
    id: 'hi',
    name: 'mario'
  }
]));