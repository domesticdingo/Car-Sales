export const addFeature = param => {
    return { type: "ADD_FEATURE", payload: param }
}

export const removeFeature = param => {
    return { type: "REMOVE_FEATURE", payload: param}
}