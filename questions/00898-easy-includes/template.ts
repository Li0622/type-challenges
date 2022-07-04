type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U
  ? 1
  : 2
  ? true
  : false

type Includes<T extends readonly any[], U> = T extends [infer F, ...infer Rest]
? IsEqual<F, U> extends true
  ? true
  : Includes<Rest, U>
: false

type a1 = Includes<[1], 1 | 2 | 3>
