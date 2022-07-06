//type 和interface的区别
//定义别名
//定义联合类型
//定义元组类型
//可以用typeof操作

type myPartial<T> = {
  [P in keyof T]?: T[P];
};

type PartialOption<T, K extends keyof T> = {
  [P in K]?: T[P];
};

type myRecord<T extends keyof any, K> = {
  [P in T]: K;
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type MyExclude<T, U> = T extends U ? never : T;

type MyExtract<T, U> = T extends U ? T : never;

//借用pick版本
type myOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>;

// 不用pick
type myOmit2<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type MyParameters<T extends Function> = T extends (...args: infer P) => any
  ? P
  : never;

type myReturnType<T extends Function> = T extends (...args: any) => infer P
  ? P
  : any;

type MyConstructorParameters<T extends abstract new (...args: any) => any>  = T extends abstract new (...args: infer P) => any ? P : never;


//自定义高级类型

type SymmetricDifference<T,U>=Exclude<T|U,T&U>

type Eg = SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>
