import Axios from 'axios'

// const baseUrl = 'http://localhost:3000/toy'; //json-server

//const baseUrl = 'http://localhost:3030/api/toy'; //node-expressas

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/toy'
    : '//localhost:3030/api/toy'

const axios = Axios.create({
    withCredentials: true
});

export default {
    query,
    save,
    remove,
    get
}

function query(filterBy) {
    if (!filterBy)
        return axios.get(`${BASE_URL}`)
            .then(res => {
                _sortResult(res.data, 'name')
                return res.data
            })
    else {
        return axios.get(`${BASE_URL}?sort=${filterBy.sort}&name=${filterBy.name}&type=${filterBy.type}&inStock=${filterBy.inStock}`)
            //for json-server:
            // return axios.get(`${BASE_URL}?_sort=${filterBy.sort}&name_like=${filterBy.name}&type_like=${filterBy.type}&inStock_like=${filterBy.inStock}`)
            .then(res => {
                _sortResult(res.data, filterBy.sort)
                return res.data
            })
    }
}

function get(id) {
    return axios.get(`${BASE_URL}/${id}`)
        .then(res => res.data)
}

function remove(id) {
    return axios.delete(`${BASE_URL}/${id}`)
}

function save(toy) {
    var prm;
    if (toy._id) {
        prm = axios.put(`${BASE_URL}/${toy._id}`, toy)
    } else {
        prm = axios.post(`${BASE_URL}`, toy)
    }
    return prm.then(res => {
        return res.data
    })
}



function _sortResult(toys, sortBy) {
    toys.sort(function (toy1, toy2) {
        switch (sortBy) {
            case 'price':
                if (+toy1.price < +toy2.price) return -1
                if (+toy1.price > +toy2.price) return 1
                return 0
            case 'name':
                if (toy1.name.toLowerCase() > toy2.name.toLowerCase()) return 1
                if (toy1.name.toLowerCase() < toy2.name.toLowerCase()) return -1
                return 0
            default :
                return 0
        }
    })

}