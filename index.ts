type m1Partial<T> = {
    [P in keyof T]?: T[P]
}

type PartialO<T, K extends keyof T> = {
    [P in K]?: T[P]
}

type MyReadon<T> = {
    readonly [P in keyof T]: T[P]
}

type myRsecord<T extends keyof any, K> = {
    [P in T]: K
}

type mPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type mExclude<T, U> = T extends U ? never : T;

type mOmit<T, K> = Pick<T, Exclude<keyof T, K>>

type mExtract<T, K> = T extends K ? T : never

type me1 = mExtract<'a' | 'b', 'a' | 'c' | 'd' | 'b'>

type t1 = {
    a: number
    b: number
}
type e1 = Exclude<'a' | 'b', 'a'>

type o1 = Omit<t1, 'a'>

type p1 = Pick<t1, 'b'>