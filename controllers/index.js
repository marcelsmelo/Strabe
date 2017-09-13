module.exports = {
    index: (req, res, next) => {
        const t = require('../turmas.json')
        res.render('index', { turmas: t });
    },
    fileUpload: (req, res, next) => {
        //req.body.nome
        //req.body.turma
        //req.file.trabalho

        logger.debug('[IndexController]', 'Form data', req.body);
        logger.debug('[IndexController]', 'Form file', req.file);
        res.status(200);
    },
    tasks: (req, res, next) => {
        console.log(req.query.turma)
        let trabalhos = require('../trabalhos.json')
        let trab = {}
        if (req.query.turma == '1TIIA' || req.query.turma == '1TIIB') {
            trab = trabalhos.TII1
        } else trab = {}
        console.log(trab)
        res.status(200).json({ tasks: trab })

    }

}