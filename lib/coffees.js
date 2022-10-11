function getCoffees(str) {
  const coffees = Math.max(str.split(/\s/).length / 300, 1);
  return `${'☕'.repeat(coffees)} ${Math.round(coffees * 2)} min read`;
}

export default getCoffees;
