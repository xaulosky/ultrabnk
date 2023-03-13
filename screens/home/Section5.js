import Icono1Seccion5 from '@/public/icons/section5/Icono1Seccion5'
import TarjetasSecciion5 from '@/public/icons/section6/TarjetasSeccion5'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'


const Section5 = () => {
    return (
        <Grid item xs={12} className="section5" style={{
            marginTop: "-100px",
            paddingBottom: "100px",
            position: "relative",
            marginBottom:"100px",
            zIndex:"2"
        }}>
            <div style={{
                position: "absolute",
                top: "-200",
                left: "0",
                right: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "-1",
                width: "100%"
            }}>
                <img src='imgs/section5/Recurso 10.svg' style={{
                    width: "1000px",
                }} />
            </div>
            <Container>
                <Grid container>
                    <Grid item xs={12} className="lista">
                        <TarjetasSecciion5 style={{
                            maxWidth: "700px"
                        }} />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Section5