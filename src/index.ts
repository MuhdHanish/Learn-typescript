class Person{
  constructor(
    public firstName: string,
    public lastName: string) {}
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  walk() {
    console.log('walking');
  }
}

class Student extends Person {
  constructor(public studentId: number,
  firstName: string,
  lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log('taking test')
  }
}

class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName
  }
}

const teacher = new Teacher('jhon', 'smith');
console.log(teacher.fullName)
