import axios from "axios"
import { constant } from "../constant"
import { combineUrlWithSlash } from "./combineUrl";


export const postApi = async (path, data, login) => {

    try {
        const fullUrl = combineUrlWithSlash(constant.baseUrl,path)
        let result = await axios.post(fullUrl, data, {
            headers: {
                Authorization: localStorage.getItem("token") || sessionStorage.getItem("token")
            }
        })
        if (result.data?.token && result.data?.token !== null) {
            if (login) {
                localStorage.setItem('token', result.data?.token)
            } else {
                sessionStorage.setItem('token', result.data?.token)
            }
            localStorage.setItem('user', JSON.stringify(result.data?.user))
        }
        return result
    } catch (e) {
        console.error(e)
        return e
    }
}
export const putApi = async (path, data, id) => {
    try {
        const fullUrl = combineUrlWithSlash(constant.baseUrl,path)
        let result = await axios.put(fullUrl, data, {
            headers: {
                Authorization: localStorage.getItem("token") || sessionStorage.getItem("token")
            }
        })
        return result
    } catch (e) {
        console.error(e)
        return e
    }
}

export const deleteApi = async (path, param) => {
    try {
        const fullUrl = combineUrlWithSlash(constant.baseUrl,path)
        let result = await axios.delete(fullUrl + param, {
            headers: {
                Authorization: localStorage.getItem("token") || sessionStorage.getItem("token")
            }
        })
        if (result.data?.token && result.data?.token !== null) {
            localStorage.setItem('token', result.data?.token)
        }
        return result
    } catch (e) {
        console.error(e)
        return e
    }
}

export const deleteManyApi = async (path, data) => {
    try {
        const fullUrl = combineUrlWithSlash(constant.baseUrl,path)
        let result = await axios.post(fullUrl, data, {
            headers: {
                Authorization: localStorage.getItem("token") || sessionStorage.getItem("token")
            }
        })
        if (result.data?.token && result.data?.token !== null) {
            localStorage.setItem('token', result.data?.token)
        }
        return result
    } catch (e) {
        console.error(e)
        return e
    }
}

export const getApi = async (path, id) => {
    try {
        const fullUrl = combineUrlWithSlash(constant.baseUrl,path)
        if (id) {
            let result = await axios.get(fullUrl + id, {
                headers: {
                    Authorization: localStorage.getItem("token") || sessionStorage.getItem("token")
                }
            })
            return result
        }
        else {
            let result = await axios.get(fullUrl, {
                headers: {
                    Authorization: localStorage.getItem("token") || sessionStorage.getItem("token")
                }
            })
            return result
        }
    } catch (e) {
        console.error(e)
        return e
    }
}

