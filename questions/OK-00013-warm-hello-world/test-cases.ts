/*
 * @Descripttion: 
 * @version: 
 * @Author: Liii_zw
 * @Date: 2022-06-20 20:34:32
 * @LastEditors: 
 * @LastEditTime: 2022-06-20 20:51:45
 */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
type test = Expect<Equal<HelloWorld, string>>