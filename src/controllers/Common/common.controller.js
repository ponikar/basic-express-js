


exports.getNameByURL = (req, res) => {
    return res.status(200).json({
        name: req.name
    });
}