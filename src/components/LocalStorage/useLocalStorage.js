import React, { useEffect, useState } from 'react'

function getSavedValue(key, value){
    const savedvalue = JSON.parse(localStorage.getItem(key))
    if(savedvalue) return savedvalue
    return value
}

function useLocalStorage(key,value) {
    const [updatedValue, setUpdatedValue] = useState(() => {
        return getSavedValue(key, value)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(updatedValue))
    },[updatedValue])

    return [updatedValue, setUpdatedValue]
}

export default useLocalStorage;