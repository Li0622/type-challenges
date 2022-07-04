type Concat<T extends any[], U extends any[]> = [...T,...U]
type aaa = Concat<[1,2,3],[2,3,4]>