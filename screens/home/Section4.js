import IconBNK from '@/public/imgs/IconBNK'
import SemiCirculo from '@/public/icons/section4/SemiCirculo'
import BurbujasBNK from '@/public/imgs/section4/BurbujasBNK'
import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'


const Section4 = () => {
    return (
        <Grid item xs={12} className="section4 " style={{
            paddingTop: "50px",
            paddingBottom: "50px"
        }}>
            <Container >
                <Grid container>
                    <Grid item md={6} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <BurbujasBNK style={{
                            width: "350px"
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={'div'} className="tarjetaSeccion4" style={{
                            position: "relative"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: "30px",
                                right: "30px"
                            }}>
                                <IconBNK style={{
                                    width: "100px"
                                }} />
                            </div>

                            <div style={{
                                display: "flex"
                            }}>
                                <h3 >
                                    Qué hacemos
                                    <span> por tu </span> negocio
                                </h3>
                               {/*  <SemiCirculo width="100px" /> */}
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Section4