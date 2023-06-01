

class Person {
  constructor(name = "Shinder", age = 28) {
    this.name = name;
    this.age = age;
  }
  toString = () => JSON.stringify(this);
}
const data = [1, 3, 5, 7, 9];
export { data };
export default Person;
