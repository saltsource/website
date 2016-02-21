export default (time = 60*3) => (req, res, next) => {
    res.setHeader('Cache-Control', `public, max-age=${time}`);
    next();
}
