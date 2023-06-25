let employee: {
  readonly id: number,
  name: string,
  retire : (date:Date) => void
} = { id: 1, name: 'hanish', retire :(date: Date)=> {
  console.log(date);
}};
console.log(employee)