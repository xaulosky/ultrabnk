import IconoAzulSection2 from '@/public/icons/section2/IconoAzulSection2'
import TelefonoSeccion2 from '@/public/imgs/TelefonoSeccion2'
import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Section2 = () => {
    return (
        <Grid item xs={12} className="section2 " sx={{
            paddingTop: "100px",
            paddingBottom: { xs: "0", md: "100px" }
        }}>
            <Container /* sx={{ maxWidth: '100%' }} maxWidth={false} */ style={{
                padding: "0"
            }}>
                <Grid container>
                    <Grid item md={6} sx={{
                        zIndex: "9",
                        display: { xs: "flex" },
                        justifyContent: "center"
                    }}>
                        <TelefonoSeccion2 sx={{
                            marginRight: { xs: "-100px", md: "0" },
                        }} className="telefonoSeccion2 " />
                    </Grid>
                    <Grid item md={6}>
                        <Box component={'div'} style={{
                            background: "#6CED00",
                            zIndex: "-1",
                            position: "relative"
                        }}
                            className={'tarjetaSeccion1 '}
                        >
                            <h3>
                                Simple <br />
                                Rápido <span>y</span> <br />
                                Seguro
                            </h3>
                            <p>
                                Te ofrecemos una alternativa a la banca, para que tus clientes puedan manejar su dinero de manera rápida y sin complicaciones.
                            </p>
                            <div style={{
                                position: "absolute",
                                bottom: "0",
                                right: "0"
                            }}>
                                <IconoAzulSection2
                                    style={{
                                        width: "150px",
                                    }}
                                />
                            </div>
                        </Box>

                    </Grid>

                </Grid>
            </Container>
        </Grid >
    )
}

export default Section2