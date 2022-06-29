import React, {ChangeEvent} from "react";
import {TextField} from "@mui/material";
import {useStyles} from "../pages/payment";

export type HandleType = {
    name: string
    setState: (event: string) => void
    value: string
    maxLength?: number
}


export const InputHandler = (props:HandleType) => {

   const handlerChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const re = /[0-9]+/g;
        if (event.target.value === '' || re.test(event.target.value)) {
            props.setState(event.target.value)
        } else (props.setState(""))
    }
    return (
        <>
            <TextField
                // className={classes.field}
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