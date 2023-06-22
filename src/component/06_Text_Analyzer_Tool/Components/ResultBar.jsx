import { Box, Container, Grid, Typography, } from '@mui/material'
import React, { useState } from 'react'

const ResultBar = () => {
    const [Words, setWords] = useState("0");
    const [Sentence, setSentence] = useState("0");
    const [Paragraphs, setParagraphs] = useState("0");
    const [Characters, setCharacters] = useState("0");
    const [Pronouns, setPronouns] = useState("0");

    const flex = {
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: "center",
    };
    return (
        <>
            <Container fixed>

                <Box sx={{ p: 2, borderRadius: '2px', backgroundColor:'whitesmoke', marginTop: '60px' }} >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ flex }}>
                        <Grid p xs={2} sx={{ flex }}>
                            <Typography sx={flex}>
                                <p>Words</p>
                                <p>{Words}</p>
                            </Typography>
                        </Grid>
                        <Grid p xs={2} sx={{ flex }}>
                        <Typography sx={flex}>
                                <p>Characters</p>
                                <p>{Characters}</p>
                            </Typography>
                        </Grid>
                        <Grid p xs={2} sx={{ flex }}>
                        <Typography sx={flex}>
                                <p>Sententce</p>
                                <p>{Sentence}</p>
                            </Typography>
                        </Grid>
                        <Grid p xs={2} sx={{ flex }}>
                        <Typography sx={flex}>
                                <p>Paragraphs</p>
                                <p>{Paragraphs}</p>
                            </Typography>
                        </Grid>
                        <Grid p xs={2} sx={{ flex }}>
                        <Typography sx={flex}>
                                <p>Pronouns</p>
                                <p>{Pronouns}</p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </>
    )
}

export default ResultBar
