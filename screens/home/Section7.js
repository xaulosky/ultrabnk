import IconBNK from '@/public/imgs/IconBNK'
import Fondo1 from '@/public/imgs/Fondo1'
import { Button, Grid, Typography } from '@mui/material'
import { Ultra } from 'next/font/google'
import React from 'react'

const Section7 = () => {
    return (
        <Grid item xs={12} className="section1 "
            style={{
                position: "relative",
                paddingTop: "200px",
                paddingBottom: "200px",

            }}
        >
            <div style={{
                zIndex: "-1",
                position: "absolute",
                top: "-100",
                left: "0",
                right: "0",
                bottom: "0",
                display: "flex",
                justifyContent: "center"
            }}>
                <Fondo1 style={{
                    width: "90%",
                    maxWidth: "700px",
                }} />
            </div>
            <Grid container spacing={0} style={{
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} >
                <Grid item xs={12} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "0",
                }}>
                    <Typography component="h3" sx={{
                        fontWeight: "600",
                        color: "#fff",
                        fontSize: { xs: "3em", md: "5em" },
                        marginBottom: "30px",
                    }}
                        className="text_center_mobil"
                    >Contáctate con nosotros</Typography >


                    <Typography component="span"
                        sx={{
                            fontSize: { xs: "1.8em", md: "2.4" },
                            fontWeight: 200,
                            marginBottom: "30px",
                            textAlign: "center",

                        }}
                    >y te elaboramos una proyección de ROI <br />
                        para iniciar de inmediato.</Typography>
                    <Button variant="contained" style={{
                        background: "#6CED00",
                        color: "#000",
                        fontSize: "2em",
                        textTransform: "none",
                        fontWeight: "500",
                        padding: "10px 30px 10px 30px",
                        borderRadius: "50px"
                    }}
                        href={`mailto:info@ultrabnk.com`}
                    >info@ultrabnk.com</Button>
                </Grid>
                <Grid item xs={12} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "100px"
                }}>
                    <IconBNK style={{
                        width: "90px"
                    }} />
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Section7