var express = require('express');
var router = express.Router();
let x=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let r=Math.hypot(x);
    let t=Math.ceil(x);
    let n=Math.clz32(x);
    
  res.render('compute', { x:x,hypot:r, ceil:t, clz32:n});
});

module.exports = router;