import React, {ChangeEvent, Fragment, RefAttributes, useEffect, useState} from "react";
import Head from "next/head";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {AppBar, Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {DatePicker} from "@mui/x-date-pickers";
import TelegramIcon from '@mui/icons-material/Telegram';
// import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// import {createMuiTheme} from "@material-ui/core";
import clsx from "clsx";
import {CurrentRateAPI} from "../api/api";
// import makeStyles from '@material-ui/styles'
// export {default} from './Buttons'


// import {makeStyles, createStyles} from '@mui/styles'
// import {makeStyles, createStyles} from '@material-ui/core'
import {makeStyles, createStyles} from '@material-ui/styles'
import {Info, Security} from "@material-ui/icons";
import Link from "next/link";
import {Toolbar} from "@material-ui/core";
import {InputField} from "../component/handler";

export const theme = createTheme({});
export const useStyles = makeStyles({
    container: {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 1%)',
        textAlign: 'center'
    },
    field: {
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        borderRadius: 3,
    },
    btn: {
        border: 'none',
        margin: 20,
        width: 400,
        height: 45,
        borderRadius: 6,
        textTransform: 'uppercase',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        cursor: 'pointer',
        color: '#fff',
        backgroundSize: '200%',
        transition: '1s',
        backgroundPosition: 'right',
        '&:hover': {
            backgroundPosition: 'left'
        }
    },
    btn1: {
        backgroundImage: 'linear-gradient(45deg, #34495e, #9b59b6, #3498db)'
    }
})


export default function Payment() {
    const [card, setCard] = useState('')
    const [dateCard, setDateCard] = useState('')
    const [dateKey, setDateKey] = useState('')
    const [amount, setAmount] = useState('');
    const [cvv, setCvv] = useState('');
    const [state, setState] = useState<any>()

    const classes = useStyles()

    const sendPay = () => {
        CurrentRateAPI.postPayment(card.trim(),
            dateKey,
            cvv, +amount
        )
            .then((res) => {
                const responseState = res.data
                setState(responseState)
            })
            .catch(error => console.log('error', error));
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const handlerCardNumber = () => {
        const rawText = Array.from(card.split(' ').join(''))
        const creditCard = [] as string[]
        rawText.forEach((t, i) => {
            if (i % 4 === 0) creditCard.push(' ')
            creditCard.push(t)
        })
        return creditCard.join('')
    }
    const handlerChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const re = /[0-9]+/g;
        if (e.target.value === '' || re.test(e.target.value)) {
            setCard(e.target.value)
        } else (setCard(""))
    }
    const handlerChangeDate = (e: any, keyboardInputValue?: (string)) => {
        if (keyboardInputValue) {
            setDateKey(keyboardInputValue)
        }
        if (e) {
            setDateCard(e)
        }
    }
    const handlerChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const re = /[0-9]+/g;
        if (e.target.value === '' || re.test(e.target.value)) {
            setAmount(e.target.value)
        } else (setAmount(""))
    }
    const handlerChangeCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
        const re = /[0-9]+/g;
        if (e.target.value === '' || re.test(e.target.value)) {
            setCvv(e.target.value)
        } else (setCvv(""))
    }

    return (
        <React.StrictMode>
            <CssBaseline/>
            <Head>
                <title>Payment</title>
            </Head>
            <main>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <Box sx={{
                            marginTop: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Avatar sx={{height: '50px', width: '50px', m: 2, bgcolor: 'cadetblue'}}>
                                <PaymentIcon sx={{height: '35px', width: '35px'}}/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Payment
                            </Typography>
                            <Box component="form"
                                 noValidate
                                 onSubmit={handlerSubmit}
                                 sx={{mt: 3}}>
                                <Grid container
                                      spacing={2}
                                      justifyContent="center"
                                      alignItems="center">
                                    <Grid item xs={12}>
                                        <InputField
                                            setState={setCard}
                                            name={"Card number"}
                                            value={card}
                                            maxLength={20}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <div className={classes.field}>
                                            <LocalizationProvider
                                                dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    inputFormat="MM/yyyy"
                                                    label="MM/YYYY Date"
                                                    value={dateCard}
                                                    onChange={handlerChangeDate}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={5}>
                                        <InputField
                                            setState={setCvv}
                                            name={"Cvv"}
                                            value={cvv}
                                            maxLength={3}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputField
                                            setState={setAmount}
                                            name={"Amount"}
                                            value={cvv}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <div className={classes.container}>
                                        <Button
                                            disabled={card.length !== 20 ||
                                            cvv.length !== 3 || amount.length < 1 || dateKey.length !== 7}
                                            className={`${classes.btn} ${classes.btn1}`}
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            onClick={sendPay}
                                            sx={{mt: 3, mb: 2,}}
                                        >
                                            Pay
                                        </Button>
                                    </div>
                                </Grid>
                            </Box>
                            <Grid>
                            </Grid>
                        </Box>
                    </Container>
                </ThemeProvider>
            </main>
            <AppBar position="static" elevation={0} component="footer" color="default"
                    sx={{marginTop: 65,}}>
            </AppBar>
            <Toolbar style={{
                justifyContent: "center",
            }}>
                <Typography variant="caption">©2022 Alexander, alexandepp@gmail.com</Typography>
                <a href="https://t.me/Alexandep_R"
                   target="_blank">
                    <Avatar sx={{height: '35px', width: '35px', m: 2, bgcolor: '#5C6BC0'}}>
                        <TelegramIcon
                            style={{cursor: 'pointer'}}
                            sx={{height: '25px', width: '25px'}}/>
                    </Avatar>
                </a>
            </Toolbar>
            <CssBaseline/>
        </React.StrictMode>
    )
}