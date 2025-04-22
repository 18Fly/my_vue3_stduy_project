// 定义一个接口，用于限制Person对象的具体属性，类似后端的接口用来约束实现对象的行为
export interface PersonInterface {
  id: string;
  name: string;
  age: number;
}

// 自定义数据类型
export type Persons = PersonInterface[];