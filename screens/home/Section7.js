import Fondo1 from '@/public/imgs/Fondo1'
import { Button, Grid } from '@mui/material'
import { Ultra } from 'next/font/google'
import React from 'react'
import IconBNK from '@/public/icons/iconBNK'

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
                    width: "800px",
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
                    <h4 style={{
                        fontWeight: "600",
                        color: "#fff",
                        fontSize: "5em",
                        marginBottom: "30px"
                    }}>Contáctate con nosotros</h4>

                    <span
                        style={{
                            fontSize: "2.4em",
                            fontWeight: 200,
                            marginBottom: "30px"
                        }}
                    >y te elaboramos una proyección de ROI <br />
                        para iniciar de inmediato.</span>

                    <Button variant="contained" style={{
                        background: "#6CED00",
                        color: "#000",
                        fontSize: "2em",
                        textTransform: "none",
                        fontWeight: "500",
                        padding: "10px 30px 10px 30px",
                        borderRadius: "50px"
                    }}>info@ultrabnk.com</Button>
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