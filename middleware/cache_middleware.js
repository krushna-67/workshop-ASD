function cacheMiddleware(req, res, next) {
    res.set('X-Cache', 'MISS')
    next()
}

module.exports = cacheMiddleware