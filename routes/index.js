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
router.post('/', function (req, res) {
    previous_thought = req.body.thought;
    story = attachToStory(story, previous_thought);
    res.send({previous_thought: generateThoughtServiceResult(previous_thought)});
});

function generateThoughtServiceResult(thought) {
    return thought + ' ...';
}

function attachToStory(story, thought) {
    return story + " " + thought;
}

/* Story service */
router.get('/api/story', function (req, res, next) {
    res.send({story: story});
});

module.exports = router;