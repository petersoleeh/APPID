import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.gbif.org/v1/occurrence/',
    params: {
        taxonKey: 7799978,
        country: 'KE'        
    }
})