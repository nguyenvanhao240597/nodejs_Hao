class NewsControllers {
  //[GET] /news
  index(red, res, next) {
    res.render("news");
  }
  show(red, res, next) {
    res.send("Xin chao");
  }
}
module.exports = new NewsControllers();
