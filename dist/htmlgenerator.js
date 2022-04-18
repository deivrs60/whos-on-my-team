const fs = require('fs')


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/rendered.html', fileContent, err => {
            if(err) {
                reject(err)
                return
            }

            resolve({
                ok:true,
                message: 'Team Profile Generated!'
            })
        })
    })
}

module.exports = { writeFile }