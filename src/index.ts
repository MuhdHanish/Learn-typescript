class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value]
  }
}

let arr = ArrayUtils.wrapInArray(1)