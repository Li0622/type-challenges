/*
 * @Descripttion: 
 * @version: 
 * @Author: Liii_zw
 * @Date: 2022-06-20 20:34:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-28 20:59:45
 */
type TupleToObject<T extends readonly any[]> = {
 [K in  T[number]]:K
}
