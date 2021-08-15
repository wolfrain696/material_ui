import React, { FC } from "react"
import {Button, Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'

    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.3)"
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(6),
        marginTop : theme.spacing(8)
    }

}))

export const Post : FC = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.mainFeaturesPost}
               style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
            <Container fixed>
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography
                                component={'h1'}
                                variant={"h3"}
                                color={'initial'}
                                gutterBottom
                            >
                                Ruslan Developer Blog
                            </Typography>
                            <Typography
                                variant={'h5'}
                                color={'initial'}
                                gutterBottom
                            >
                                Lorem ipsum d olor sit amet, consectetur adipisicing elit. Aperiam, atque
                                cupiditate deleniti earum enim expedita laboriosam laudantium nam obcaecati quae
                                repellendus sed sint unde? Sint!
                            </Typography>
                            <Button variant={'contained'} color={'secondary'}>
                                Learn more
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}