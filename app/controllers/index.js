const MainServices = require('../services/index')

class MainController {
    testFunction(req, res){
        const randomNumber = new MainServices().getRandomNumber()
        return res.send({
            code: 200,
            error: false,
            message: 'Number gotten successfully',
            data: randomNumber
        })
    }

    returnMyName(req, res){
        const name = new MainServices().getName()
        return res.send({
            code: 200,
            error: false,
            message: 'Number gotten successfully',
            data: name
        })
    }
};

module.exports = MainController;