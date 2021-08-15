import React, {FC} from 'react';
import {Header} from './Components/Header';
import {Button, Container, CssBaseline, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {Post} from "./Components/Post";
import {Content} from "./Components/Content";

const useStyles = makeStyles(theme => ({

}))

export const App: FC = () => {
    const classes = useStyles()
    return (
        <>
            <CssBaseline/>
            <Header/>
            <main>
                <Post/>
                <Content/>
            </main>
        </>
    );
};

