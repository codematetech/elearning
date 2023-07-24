module.exports = (req, res, next) => {
  const pageNumber = Number.parseInt(req.query.page);
  const sizeNumber = Number.parseInt(req.query.size);

  let page = 0;

  if (!Number.isNaN(pageNumber) && pageNumber > 0) {
    page = pageNumber;
  }
  let size = 5;

  if (!Number.isNaN(sizeNumber) && !(sizeNumber > 5) && !(sizeNumber < 1)) {
    size = sizeNumber;
  }
  req.pagination = { page, size };
  next();
};
