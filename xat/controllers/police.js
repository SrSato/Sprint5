const police = (req, res) => {

    let username = req.body.username.trim();
    if (username == "") {
        return res.redirect('/')
    }
    roomName = 'lobby';
    res.render('chat', { room : roomName, username : username })
};

module.exports = police;
