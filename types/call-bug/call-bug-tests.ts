function match(a: number, b: number) {
  
}

match(1, true, 'anything can go here!'); // Expected 2 arguments, but got 3. ts(2554)

match.call([], 1, true, 'anything can go here!'); // No error