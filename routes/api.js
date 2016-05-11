router.post('/', function(req, res) {
    previous_thought = req.body.thought;
    story += " " + previous_thought;
    res.send({ previous_thought: previous_thought+' ...' });
});

router.get('/api/story', function(req, res, next) {
    res.send({story: story});
});
