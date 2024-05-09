const getHomepage = (req, res) => {
    res.send("Hi, I'm LAT đẹp try");
}

const getHTMLPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getHTMLPage
};