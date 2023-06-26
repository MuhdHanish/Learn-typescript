interface Result<T> {
  data: T | null,
  error: string | null
}

function fetch<T>(url: string): Result<T>{
  console.log(url)
  return {
    data: null,
    error:null
  }
}

interface User {
  username: string
}

interface Product {
  title: string
}

let username = fetch<User>('url');
username.data?.username;

let product = fetch<Product>('url');
product.data?.title;