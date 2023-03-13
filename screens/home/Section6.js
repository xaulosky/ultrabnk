import CirculoSeccion6 from '@/public/icons/section6/CirculoSeccion6'
import Degradado1 from '@/public/icons/section6/Degradado1'
import Degradado2 from '@/public/icons/section6/Degradado2'
import Grafica2Seccion6 from '@/public/icons/section6/Grafica2Seccion6'
import Icono1Seccion6 from '@/public/icons/section6/Icono1Seccion6'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Section6 = () => {
    return (
        <Grid item xs={12} className="section6" style={{
            background: "#F2F2F2",
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        }}>
            <Container>
                <div style={{ position: "absolute", top: "0", left: "0" }}>
                    <Icono1Seccion6 style={{
                        width: "450px"
                    }} />
                </div>
                <Grid container>
                    <Grid item md={4} style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <h3 style={{
                            marginBottom: "50px"
                        }}>Comparativa <span>de</span>  <br /> implementación</h3>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "20px"
                            }}
                        >
                            <Degradado1 style={{ width: "50px" }} />
                            <span style={{
                                color: "#000",
                                fontSize: "1.8em",
                                marginLeft: "10px",
                                fontWeight: "600"
                            }}> CON  ULTRABNK</span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <Degradado2 style={{ width: "50px" }} />

                            <span style={{
                                color: "#000",
                                fontSize: "1.8em",
                                marginLeft: "10px",
                                fontWeight: "600"
                            }}>SIN  ULTRABNK</span>
                        </div>
                    </Grid>
                    <Grid item md={4}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}
                    >
                        <span
                            style={{
                                background: "#333333",
                                padding: "5px 10px 5px 15px",
                                borderRadius: "16px",
                                letterSpacing: "5px",
                                marginBottom: "30px",
                                fontWeight: "500",
                                fontSize: "1.6em"
                            }}
                        >tiempo</span>
                        <CirculoSeccion6
                            style={{
                                maxWidth: "400px"
                            }}
                        />
                    </Grid>
                    <Grid item md={4}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            fontWeight: "500",
                            fontSize: "1.6em"
                        }}
                    >
                        <span
                            style={{
                                background: "#333333",
                                padding: "5px 10px 5px 15px",
                                borderRadius: "16px",
                                letterSpacing: "5px",
                                marginBottom: "30px",
                                fontWeight: "500"
                            }}
                        >inversión</span>
                        <Grafica2Seccion6 style={{
                            maxHeight: "300px",
                        }} />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Section6