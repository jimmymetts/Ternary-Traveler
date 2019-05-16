const baseURL = "http://0.0.0.0:8088";

const APIManager = {
    getAllPlaces: function () {
        return fetch(`${baseURL}/places`)
            .then(response => response.json())
    },
    getAllInterests: function () {
        return fetch(`${baseURL}/interests`)
            .then(response => response.json())
    },
    deleteInterest: function (id) {
        return fetch(`${baseURL}/interests/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    editInterest: function (id, obj) {
        return fetch(`${baseURL}/interests/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    },
    addInterest: function (obj) {
        return fetch(`${baseURL}/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    }
 }
 export default APIManager