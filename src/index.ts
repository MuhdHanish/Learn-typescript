type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null  |undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//optional porperty access operator
console.log(customer?.birthday?.getFullYear());

//optional element access operator
// if(customers!==null&&customers!==undifine)
// customers[0]

// customers?[0]

//optional call operator
let log: any = null;
log?.('a');