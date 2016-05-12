
var express = require('express');
var router = express.Router();

var story = 'Once upon a time,';
var previous_thought = story;

/* Home page server */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Chain of thought', thought: previous_thought + ' ...'});
});

router.get('/story', function (req, res, next) {
    res.render('story', {title: 'Chain of thought', story: story});
});


/* thought receiver service */
function ServiceHelper(){
    var a= 0;
}
ServiceHelper.prototype.generateThoughtServiceResult = function (thought) {
    return thought + ' ...';
};

ServiceHelper.prototype.attachToStory  = function (story, thought) {
    return story + " " + thought;
};

var serviceHelper = new ServiceHelper();

router.post('/', function (req, res) {
    previous_thought = req.body.thought;
    story = serviceHelper.attachToStory(story, previous_thought);
    res.send({previous_thought: serviceHelper.generateThoughtServiceResult(previous_thought)});
});

/* Story service */
router.get('/api/story', function (req, res, next) {
    res.send({story: story});
});

module.exports = router;