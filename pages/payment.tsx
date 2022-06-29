import React, {useState} from "react";
import Head from "next/head";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {AppBar, Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import TelegramIcon from '@mui/icons-material/Telegram';
import {CurrentRateAPI} from "../api/api";
import {makeStyles} from '@material-ui/styles'
import {useStyles} from "./index";
// import {Toolbar} from "@material-ui/core";
// import {InputHandler} from "../component/InputHandler";

export const theme = createTheme({});


export default function Payment() {
    const classes = useStyles()
    
    const [card, setCard] = useState('')
    const [dateCard, setDateCard] = useState('')
    const [dateKey, setDateKey] = useState('')
    const [amount, setAmount] = useState('');
    const [cvv, setCvv] = useState('');
    const [state, setState] = useState<string>()


    const sendPay = () => {
        CurrentRateAPI.postPayment(card.trim(),
            dateKey,
            cvv, +amount
        )
            .then((res) => {
                const responseState = res.data
                console.log(responseState)
                setState(responseState)
            })
            .catch(error => console.log('error', error));
    }
    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const handlerChangeDate = (e: any, keyboardInputValue?: (string)) => {
        if (keyboardInputValue) {
            setDateKey(keyboardInputValue)
        }
        if (e) {
            setDateCard(e)
        }
    }
    const handleCardNumber = () => {
        const rawText = Array.from(card.split(' ').join(''))
        const creditCard = [] as string[]
        rawText.forEach((t, i) => {
            if (i % 4 === 0) creditCard.push(' ')
            creditCard.push(t)
        })
        return creditCard.join('')
    }

    return (
        <React.StrictMode>
            <CssBaseline/>
            {/*<Head>*/}
            {/*    <title>Payment</title>*/}
            {/*</Head>*/}
            {/*<main>*/}
            {/*    <ThemeProvider theme={theme}>*/}
            {/*        <Container component="main" maxWidth="xs">*/}
            {/*            <Box sx={{*/}
            {/*                marginTop: 6,*/}
            {/*                display: 'flex',*/}
            {/*                flexDirection: 'column',*/}
            {/*                alignItems: 'center',*/}
            {/*            }}>*/}
            {/*                <Avatar sx={{height: '50px', width: '50px', m: 2, bgcolor: 'cadetblue'}}>*/}
            {/*                    <PaymentIcon sx={{height: '35px', width: '35px'}}/>*/}
            {/*                </Avatar>*/}
            {/*                <Typography component="h1" variant="h5">*/}
            {/*                    Payment*/}
            {/*                </Typography>*/}
            {/*                <Box component="form"*/}
            {/*                     noValidate*/}
            {/*                     onSubmit={handlerSubmit}*/}
            {/*                     sx={{mt: 3}}>*/}
            {/*                    <Grid container*/}
            {/*                          spacing={2}*/}
            {/*                          justifyContent="center"*/}
            {/*                          alignItems="center">*/}
            {/*                        <Grid item xs={12}>*/}
            {/*                            <InputHandler*/}
            {/*                                setState={setCard}*/}
            {/*                                name={"Card number"}*/}
            {/*                                value={handleCardNumber()}*/}
            {/*                                maxLength={20}*/}
            {/*                            />*/}
            {/*                        </Grid>*/}
            {/*                        <Grid item xs={12} sm={7}>*/}
            {/*                            <div className={classes.field}>*/}
            {/*                                <LocalizationProvider*/}
            {/*                                    dateAdapter={AdapterDateFns}>*/}
            {/*                                    <DatePicker*/}
            {/*                                        inputFormat="MM/yyyy"*/}
            {/*                                        label="MM/YYYY Date"*/}
            {/*                                        value={dateCard}*/}
            {/*                                        onChange={handlerChangeDate}*/}
            {/*                                        renderInput={(params) => <TextField {...params} />}*/}
            {/*                                    />*/}
            {/*                                </LocalizationProvider>*/}
            {/*                            </div>*/}
            {/*                        </Grid>*/}
            {/*                        <Grid item xs={12} sm={5}>*/}
            {/*                            <InputHandler*/}
            {/*                                setState={setCvv}*/}
            {/*                                name={"Cvv"}*/}
            {/*                                value={cvv}*/}
            {/*                                maxLength={3}*/}
            {/*                            />*/}
            {/*                        </Grid>*/}
            {/*                        <Grid item xs={12}>*/}
            {/*                            <InputHandler*/}
            {/*                                setState={setAmount}*/}
            {/*                                name={"Amount"}*/}
            {/*                                value={amount}*/}
            {/*                            />*/}
            {/*                        </Grid>*/}
            {/*                    </Grid>*/}
                                <Grid item xs={12} sm={5}>
                                    <div className={classes.container}>
                                        <Button
                                            disabled={card.length !== 20 ||
                                            cvv.length !== 3 || amount.length < 1 || dateKey.length !== 7}
                                            className={`${classes.btn} ${classes.btn1}`}
                                            // type="submit"
                                            fullWidth
                                            variant="contained"
                                            onClick={sendPay}
                                            sx={{mt: 3, mb: 2,}}
                                        >
                                            Pay
                                        </Button>
                                    </div>
                                </Grid>
            {/*                </Box>*/}
            {/*                <Grid>*/}
            {/*                </Grid>*/}
            {/*            </Box>*/}
            {/*        </Container>*/}
            {/*    </ThemeProvider>*/}
            {/*</main>*/}
            {/*<AppBar position="static" elevation={0} component="footer" color="default"*/}
            {/*        sx={{marginTop: 65}}>*/}
            {/*</AppBar>*/}
            {/*<Toolbar style={{*/}
            {/*    justifyContent: "center"*/}
            {/*}}>*/}
            {/*    <Typography variant="caption">©2022 Alexander, alexandepp@gmail.com</Typography>*/}
            {/*    <a href="https://t.me/Alexandep_R"*/}
            {/*       // target="_blank"*/}
            {/*    >*/}
            {/*        <Avatar sx={{height: '35px', width: '35px', m: 2, bgcolor: '#5C6BC0'}}>*/}
            {/*            <TelegramIcon*/}
            {/*                style={{cursor: 'pointer'}}*/}
            {/*                sx={{height: '25px', width: '25px'}}/>*/}
            {/*        </Avatar>*/}
            {/*    </a>*/}
            {/*</Toolbar>*/}
            <CssBaseline/>
        </React.StrictMode>
    )
}