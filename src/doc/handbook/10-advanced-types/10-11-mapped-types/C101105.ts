/*
 * Advanced Types
 *     Mapped types
 *         Partial<T>
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * TS 内置了很多常用的映射类型
   */

  /*
   * Partial<T>
   * 将所有属性变成可选的（optional）
   */

  interface Person {
    name: string;
    age: number;
  }

  type PartialPerson01 = Partial<Person>;

  const person: PartialPerson01 = { name: "FOO", age: 9 };
  person.name = undefined;
  person.age = undefined;
}

export {};
