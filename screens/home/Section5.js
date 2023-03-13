import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'


const Section5 = () => {
    return (
        <Grid item xs={12} className="section5" style={{
            marginTop: "0px",
            paddingBottom: "100px",
            position: "relative",
            marginBottom: "100px",
            zIndex: "2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
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
                    <Grid item xs={12} className="lista" >
                        <img src='imgs/section5/Recurso 9.svg' style={{
                            width: "90%",
                            maxWidth: "700px"
                        }} />
                    </Grid>
                    <h3> minimizamos <br /> <span> el </span> riesgo</h3>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Section5