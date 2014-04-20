/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  var ua = req.headers['user-agent'];
  if((/mobile/i.test(ua))){
    res.render('client', {});  
  }else{
    res.render('home', {});  
  }
  
};
