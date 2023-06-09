import Recurso17 from '@/public/icons/section5/Recurso17'
import Recurso18 from '@/public/icons/section5/Recurso18'
import Tarjetas from '@/public/imgs/section5/Tarjetas'
import { Grid, Hidden } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'


const Section5 = () => {
    return (
        <Grid item xs={12} className="section5" style={{
            marginTop: "0px",
            position: "relative",
            marginBottom: "100px",
            zIndex: "2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Hidden only={"xs"}>
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
                            <Tarjetas style={{
                                width: "100%",
                                maxWidth: "700px"
                            }} />
                            {/* <img src='imgs/section5/Recurso 9.svg' style={{
                                width: "90%",
                                maxWidth: "700px"
                            }} /> */}
                        </Grid>
                        <h3> minimizamos <br /> <span> el </span> riesgo</h3>
                    </Grid>
                </Container>
            </Hidden>

            <Hidden smUp>
                <Grid container>
                    <Grid item xs={12}>
                        <h3 className='text_center_mobil'
                            style={{
                                fontSize: "2em",
                                marginBottom: "50px",
                                marginTop: "50px"
                            }}
                        > minimizamos <span> el </span> riesgo</h3>

                        <Recurso17 style={{
                            width: "100%",
                            maxWidth: "700px"
                        }} />
                        <Recurso18 style={{
                            width: "100%",
                            maxWidth: "700px"
                        }} />


                    </Grid>
                </Grid>
            </Hidden>


        </Grid>
    )
}

export default Section5