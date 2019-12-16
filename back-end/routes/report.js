module.exports = function(app,db){
    
    var multer  = require('multer')
    var upload = multer({ dest:'assets/images/' }) 
    var loginController = require('../controllers/login')(db);
    var wellsController = require('../controllers/wells')(db);

    
   app.post('/login',loginController.login);
   app.get('/wells',wellsController.getwells);
   app.post('/createwell',wellsController.createwell);
   app.get('/getactivewell',wellsController.getactivewell);
   app.get('/getwell/:id',wellsController.getwell);
   app.post('/endwell',wellsController.endwell);
   
   

     
   
}