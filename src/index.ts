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

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

printName([
  new Student(1, 'muhd', 'hanish'),
  new Teacher('mosh', 'hamedani'),
  new Principal('jhon', 'smith')
])

function printName (people: Person[]) {
  for (let person of people) {
    console.log(person.fullName)
  }
}
