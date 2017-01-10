/**
 * Created by ChristopherBorum on 08/01/2017.
 */
let characters = 'ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqstuvwxyz1234567890-_'
module.exports.randomString = function (lenght) {
    let res = ""
    for (let i = 0; i < lenght; i++) {
        res += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return res
}