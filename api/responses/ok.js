module.exports = function ok(data) {
    return this.res.status(200).send(data);
};