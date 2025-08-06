export default function generatePass() {
    let password: string = ''
    let characters:string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuWwXzYyZ1234567890!@#$%&*()'
    let passwordLength = 12    

    for(let index = 0; index < passwordLength; index++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return password
}