const newsRouter = require('./news.route');
const siteRouter = require('./site.route');


function route(app){
        app.use('/newspage', newsRouter);
        app.use('/', siteRouter);
        
}
module.exports = route;