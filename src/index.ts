class KeyValuePair <K,V> {
  constructor(
    public key: K,
    public value: V) { }
}

let pair = new KeyValuePair<number, string>(10, 'a');
let sec = new KeyValuePair<string, string>('1', "a");
pair.key
sec.key