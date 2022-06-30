import React from "react";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/styles";
import {createTheme} from "@mui/material/styles";


export const theme = createTheme({});


export default function Home() {
        return  (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                </ThemeProvider>
        );
    }

// ReactDOM.hydrate(<Main />, document.querySelector('#root'));