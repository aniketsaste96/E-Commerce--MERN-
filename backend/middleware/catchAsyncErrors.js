//async error handling

module.exports = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
    //pre build class of js Promiss

}