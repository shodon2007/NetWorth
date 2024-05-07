const fs = require('fs');
const path = require('path');
const ApiError = require('../exceptions/api-error');

class TranslationController {
    async translation(req, res, next) {
        const lang = req.params.lang;
        const filePath = path.join(__dirname, '..', 'translations', `${lang}.json`);
        console.log(filePath);
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                return next(ApiError.BadRequest('Произошла ошибка при поиске файла переводов'));
            }
            try {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
            } catch(e) {
                return next(ApiError.BadRequest('Произошла ошибка при парсинге файла переводов'));
            }
        })
    }
}

module.exports = new TranslationController();