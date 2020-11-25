import axios from 'axios'

const username = 'icipe'
const password ='icipe'

const UsernamePasswordBuffer = Buffer.from(username + ':' + password)
const base64data = UsernamePasswordBuffer.toString('base64')


export default axios.create({
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Basic ${base64data}`
    // },
    baseURL: 'https://api.gbif.org/v1/occurrence/',
    // auth:{
    //     username: 'icipe',
    //     password: 'icipe'

    // },
    params: {
        taxonKey: 7799978,
        country: 'KE'    
    }
})
