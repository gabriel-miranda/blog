function getCoffees(str) {
  const coffees = Math.max(str.split(/\s/).length / 300, 1);
  return '☕'.repeat(coffees);
}

export default getCoffees;
