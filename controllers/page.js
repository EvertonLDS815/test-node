

const principalPage = (req, res) => {
    res.send("Olá!! Meu nome é Everton");
}

const homePage = (req, res) => {
    res.send("Estamos na página de home");
}

module.exports = {
    principalPage,
    homePage
}