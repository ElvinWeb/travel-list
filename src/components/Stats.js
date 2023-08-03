function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length)
    return (
      <p className="stats">
        <em>start adding the some items to the packing list🧳</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼You have the ${numItems} items on your list , and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
export default Stats;
