class SiteControllers{
    //[GET] /news
    home(red, res, next){
        res.render('home')

    }
    search(red, res, next){
        res.render('search')

    }
}
module.exports = new SiteControllers;
