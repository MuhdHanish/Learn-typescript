function render(document: unknown) {
  if (typeof document === 'string') {
    document.toUpperCase();
  }
  document.move();
  document.fly();
  document.whateverWeWant();
}

