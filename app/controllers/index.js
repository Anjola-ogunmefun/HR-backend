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
};

module.exports = MainController;