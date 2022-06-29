import React from "react";
import {makeStyles} from "@material-ui/styles";
import Payment from "./payment";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/styles";
import {CacheProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";

// const cache = createEmotionCache();
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

import createCache from '@emotion/cache';

// export function createEmotionCache() {
//     return createCache({ key: 'css' });
// }


export default function Home() {
        return  (
            // <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Payment />
                </ThemeProvider>
            // </CacheProvider>
        );
    }

// ReactDOM.hydrate(<Main />, document.querySelector('#root'));