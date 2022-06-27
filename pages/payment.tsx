import React, {ChangeEvent, Fragment, useEffect, useState} from "react";
import Head from "next/head";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {DatePicker} from "@mui/x-date-pickers";
// import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { makeStyles, createStyles } from '@mui/styles'
// import {createMuiTheme} from "@material-ui/core";
import clsx from "clsx";
// import makeStyles from '@material-ui/styles'
// export {default} from './Buttons'

const theme = createTheme();


const useStyles = makeStyles({
    container: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
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
        backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00A8FF)'
    }
})


export default function Payment() {
    const classes = useStyles()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    const [card, setCard] = useState('')
    const [dateCard, setDateCard] = useState('')
    const [amount, setAmount] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumber = () => {
        const re = /[0-9]+/g
        // @ts-ignore
        const rawText = [...card.split(' ').join('')]
        const creditCard = [] as string[]
        rawText.forEach((t, i) => {
            if (i % 4 === 0) creditCard.push(' ')
            creditCard.push(t)
        })
        return creditCard.join('')
    }

    const handleChangeCardNumber = (e: any) => {
        const re = /[0-9]+/g;
        if (e.target.value === '' || re.test(e.target.value))
        {setCard(e.target.value)} else (setCard(""))
    }

    const handleChangeDate = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | null) => {
        // const regexddmmyyyy = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
        // @ts-ignore
        setDateCard(e)
    }
    const handleChangeAmount = (e: any) => {
        const re = /[0-9]+/g;
        if (e.target.value === '' || re.test(e.target.value))
        {setAmount(e.target.value)} else (setAmount(""))
    }
    const handleChangeCvv = (e: any) => {
        const re = /[0-9]+/g;
        if (e.target.value === '' || re.test(e.target.value))
        {setCvv(e.target.value)} else (setCvv(""))
    }


    // @ts-ignore
    return (
        <React.StrictMode>



            <CssBaseline/>

            {/*<LocalizationProvider dateAdapter={AdapterDateFns}>*/}
            {/*<React.Fragment>*/}
            <Head>
                <title>Payment</title>
                <meta name="description" content='test for Datasub'/>
            </Head>
            <main>
                <ThemeProvider theme={theme}>

                    {/*    <CssBaseline/>*/}
                    <Container component="main" maxWidth="xs">

                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{height: '50px', width: '50px', m: 2, bgcolor: 'secondary.main'}}>
                                <PaymentIcon sx={{height: '35px', width: '35px'}}/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Payment
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            inputProps={{maxLength: 20}}
                                            value={handleCardNumber()}
                                            onChange={handleChangeCardNumber}
                                            required
                                            fullWidth
                                            label="Card number"
                                            name="Card number"
                                            autoComplete="Card number"
                                            sx={{
                                                boxShadow: 5,
                                                borderRadius: 1
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <TextField
                                                sx={{
                                                    position: "absolute",
                                                    boxShadow: 5,
                                                    borderRadius: 1
                                                }}
                                            />
                                            <DatePicker
                                                inputFormat="MM/yyyy"
                                                label="MM/YYYY Date"
                                                value={dateCard}
                                                onChange={handleChangeDate}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>

                                    </Grid>
                                    <Grid item xs={12} sm={5}>
                                        <TextField
                                            required
                                            fullWidth
                                            value={cvv}
                                            onChange={handleChangeCvv}
                                            inputProps={{maxLength: 3}}
                                            id="CVV"
                                            label="CVV"
                                            name="CVV"
                                            sx={{
                                                boxShadow: 5,
                                                borderRadius: 1
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>

                                        <TextField
                                            required
                                            fullWidth
                                            name="Amount"
                                            label="Amount"
                                            value={amount}
                                            // inputProps={{ inputmode: 'numeric', pattern: '[0-9]*' }}
                                            onChange={handleChangeAmount}
                                            id="Amount"
                                            sx={{
                                                boxShadow: 5,
                                                borderRadius: 1
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <div className={classes.container}>
                                <Button
                                    disabled={card.length !== 2}
                                    className={ `${classes.btn} ${classes.btn1}` }
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2, }}
                                >
                                    Pay
                                </Button>
                                </div>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </main>
        </React.StrictMode>
    )
}
// const [card, setCard] = useState('')
// const [dateCard, setDateCard] = useState('')
// const [amount, setAmount] = useState('');
// const [cvv, setCvv] = useState('');