type MyAwaited<T extends Promise<any>> = T extends Promise<infer V> ?  V extends Promise<any> ?  MyAwaited<V> : V :T 

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>

type t = MyAwaited<Y>
