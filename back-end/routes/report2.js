module.exports = function(app,db){
    var reportController = require('../controllers/report2')(db);
    app.post('/report/getreports',reportController.getreports);
    app.post('/report/syncreports',reportController.syncreports);
    app.post('/report/postreport',reportController.postReport);
    app.get('/report/getreportdetails/:id',reportController.getReportdetails);
    app.put('/report/edit/:id',reportController.editReport);
 }