function getCoffees(str) {
  const minutes = str.split(/\s/).length / 100;
  const coffees = Math.max(minutes / 5, 1);
  return `${'☕'.repeat(coffees)} ${Math.round(minutes)} min read`;
}

export default getCoffees;
