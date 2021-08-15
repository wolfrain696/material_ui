import {FC} from "react"
import {Container, makeStyles, Typography, Grid, Button, Card, CardMedia, CardContent} from "@material-ui/core";

const useStyles = makeStyles(there => ({
    mainContent: {},
    mainButtons: {},
    cardGrid: {},
    card:{},
    cardContent: {},
    cardMedia: {}
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8]

export const Content: FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.mainContent}>
            <Container maxWidth='md'>
                <Typography variant='h2' align={'center'} color='textPrimary' gutterBottom>
                    Ruslan Developer Blog
                </Typography>
                <Typography component={'p'} variant={'h6'} align={'center'} color='textPrimary' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto delectus eligendi, est
                    expedita nulla quasi quibusdam vel voluptatem. Ad aliquid aperiam debitis delectus, deleniti dolore
                    eos esse ipsa ipsum labore libero molestiae nesciunt nisi nostrum, nulla odio odit quam qui quidem
                    recusandae. Architecto deserunt et eum nihil quo velit.
                </Typography>
                <div className={classes.mainButtons}>
                    <Grid container spacing={2} justify='center'>
                        <Grid item>
                            <Button variant={'contained'} color={"primary"}>
                                Start Now
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant={'outlined'} color={"primary"}>
                                learn more
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Container className={classes.cardGrid} maxWidth={'md'}>
                <Grid container spacing={4}>
                    {cards.map(card => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                           image='https://source.unsplash.com/random'
                                           title='Image title'
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant='h5' gutterBottom>
                                        Blog post
                                    </Typography>
                                    <Typography variant='h5' gutterBottom>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, labore.
                                    </Typography>
                                </CardContent>
                                <Button size='small' color={'primary'}>
                                    View
                                </Button>
                                <Button size='small' color={'primary'}>
                                    Edit
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}