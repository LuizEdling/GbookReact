exports.addBookToReadLater = (req, res) => {
  const { bookId } = req.params;

  if (!req.session.readLaterBooks) {
    req.session.readLaterBooks = [];
  }

  if (!req.session.readLaterBooks.includes(bookId)) {
    req.session.readLaterBooks.push(bookId);
  }

  res.status(200).json({ message: 'Livro adicionado na lista Ler Mais Tarde' });
};

exports.getReadLaterBooks = (req, res) => {
  const readLaterBooks = req.session.readLaterBooks || [];
  res.status(200).json(readLaterBooks);
};

exports.deleteReadLaterBook = (req, res) => {
  const { bookId } = req.params;

  if (!req.session.readLaterBooks) {
    req.session.readLaterBooks = [];
  }

  const index = req.session.readLaterBooks.indexOf(bookId);
  if (index > -1) {
    req.session.readLaterBooks.splice(index, 1);
    return res.status(200).json({ message: 'Livro removido da lista Ler Mais Tarde' });
  }

  res.status(400).json({ message: 'Livro não encontrado na lista Ler Mais Tarde' });
};