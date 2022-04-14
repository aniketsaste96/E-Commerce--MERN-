import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERRORS } from "../constants/productConstants"

import axios from "axios";

export const getPrdouct = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })

        const { data } = await axios.get("/api/v1/products");

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}



//clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}