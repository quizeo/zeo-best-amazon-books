const Book = (prop) => {
  const { img, title, author, number } = prop;

  return (
    <article className="book">
      <img src={img} alt="interesting fact" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">#{number + 1}</span>
    </article>
  );
};

export default Book;
