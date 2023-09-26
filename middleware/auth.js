const cekToken = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            res.json({
                message: 'unauthorize',
                status: 401
            })
        } else {
            next()
        }
    } catch (error) {
        res.send('unauthorize')
    }
}

export default { cekToken }