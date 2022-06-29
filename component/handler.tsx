import React, {useState} from "react";
import {dividerClasses, TextField} from "@mui/material";
import {useStyles} from "../pages/payment";

export type HandleType = {
    name: any
    setState: any
    value: any
    maxLength?: any
}



export const InputField = (props:HandleType) => {
    const classes = useStyles()
   const handlerChange = (event:any) => {

        const re = /[0-9]+/g;
        if (event.target.value === '' || re.test(event.target.value)) {
            props.setState(event.target.value)
        } else (props.setState(""))
    }
    return (
        <>
            <TextField
                className={classes.field}
                required
                fullWidth
                value={props.value}
                onChange={handlerChange}
                inputProps={{maxLength: props.maxLength}}
                id={props.name}
                label={props.name}
                name={props.name}
            />
        </>
    )
}