function guestMiddleware(req, res, next) {
    const { user } = req.query;
    if (!user) {
        return res.send('El Usuario debe estar logueado!');
    }
    req.user = user;
    next();
}

module.exports = guestMiddleware;