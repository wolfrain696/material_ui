import React, { FC } from "react"
import {AppBar, Box, Button, Container, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    }
}))

export const Header : FC = () => {
    const classes = useStyles()

    return (
        <AppBar position={'fixed'}>
            <Container fixed>
                <Toolbar>
                    <IconButton edge={"start"}
                                color={"inherit"} aria-label={'menu'}
                                className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant={'h6'}>Ruslan developer blog</Typography>
                    <Box mr={3}>
                        <Button color={'inherit'} variant={'outlined'}>
                            Log In
                        </Button>
                    </Box>
                    <Button color={'secondary'} variant={'contained'}>
                        Sing up
                    </Button>

                </Toolbar>
            </Container>
        </AppBar>
    )
}