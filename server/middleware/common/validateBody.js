module.exports = validator => {
    return async (req, res, next) => {
        const { errors } = await validator(req.body);
        if (errors) return res.status(400).json({ message: errors[0] });
        next();
    };
};
