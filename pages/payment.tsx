import React from "react";
import {makeStyles} from '@material-ui/styles'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Button, CssBaseline} from "@mui/material";

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
export const theme = createTheme({});


function Payment() {
    const classes = useStyles()
    return (
        <React.StrictMode>
            <CssBaseline/>
            <main>
                <ThemeProvider theme={theme}>
                    <div className={classes.container}>
                        <Button
                            className={`${classes.btn} ${classes.btn1}`}
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2,}}
                        >
                            Hello
                        </Button>
                    </div>
                </ThemeProvider>
            </main>
            <CssBaseline/>
        </React.StrictMode>
    )
}