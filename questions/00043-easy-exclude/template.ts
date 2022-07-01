type MyExclude<T, U> = T extends U ? never : T

type t1 = "a" | "b" | "c"
type t2 = 'a'
type r = MyExclude<t1,t2>


