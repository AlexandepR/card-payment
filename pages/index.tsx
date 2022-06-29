import React from "react";
import {makeStyles} from "@material-ui/styles";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/styles";
import {CacheProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";

// const cache = createEmotionCache();
export const theme = createTheme({});

import createCache from '@emotion/cache';
import Payment from "./payment";

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