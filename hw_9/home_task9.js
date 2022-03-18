const fse = require('fs-extra')

fse.ensureDir('./firstFolder', () => {
    console.log('folder is created')
    fse.ensureDir('./secondFolder', () => {
        console.log('second folder is created')
        fse.ensureFile('./firstFolder/file.txt', () => {
            console.log('file is created')
            fse.move('./firstFolder/file.txt', './secondFolder/file.txt', () => {
                console.log('file is moved')
                fse.remove('./secondFolder/file.txt', () => {
                    console.log('file is removed')
                    fse.remove('./secondFolder', () => {
                        console.log('second folder is removed')
                        fse.remove('./firstFolder', () => {
                            console.log('first folder is removed')
                        })
                    })
                })
            })
        })
    })
})