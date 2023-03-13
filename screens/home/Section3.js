import FlechaDerecha from '@/public/icons/section3/FlechaDerecha'
import Icono1Seccion3 from '@/public/icons/section3/Icono1Seccion3'
import Icono2Seccion3 from '@/public/icons/section3/Icono2Seccion3'
import Icono3Seccion3 from '@/public/icons/section3/Icono3Seccion3'
import Icono4Seccion3 from '@/public/icons/section3/Icono4Seccion3'
import IconoVerdeSeccion3 from '@/public/icons/IconoVerdeSeccion3'
import { Grid, Hidden } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'


const Section3 = () => {
    return (
        <Grid item xs={12} >
            <Grid container className="section3">
                <Container
                    sx={{ maxWidth: '1100px' }} maxWidth={false}
                >
                    <Grid container>
                        <Grid item xs={12} md={5} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            marginTop: { xs: "100px", md: "0" }
                        }} >
                            <div >
                                <h3>
                                    Donde <br />
                                    <span>tus </span> clientes <br />
                                    podrán
                                </h3>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    left: "0",
                                    bottom: "0"
                                }}
                            >
                                <Hidden only="xs">
                                    <IconoVerdeSeccion3 width="200px" />
                                </Hidden>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box component="div" className='tarjetaSeccion3' >
                                <Grid container>
                                    <Grid item xs={12} style={{
                                        marginBottom: "70px"
                                    }}
                                    >
                                        <div className='lista'>
                                            <Box component="div">
                                                <div>
                                                    <Icono1Seccion3 />
                                                </div>
                                                <p>Realizar transacciones</p>
                                            </Box>
                                            <Box component="div">
                                                <div>
                                                    <Icono2Seccion3 />
                                                </div>
                                                <p>Solicitudes de créditos</p>
                                            </Box>
                                            <Box component="div">
                                                <div>
                                                    <Icono3Seccion3 />
                                                </div>
                                                <p>Transferir al extranjero</p>
                                            </Box>
                                            <Box component="div">
                                                <div>
                                                    <Icono4Seccion3 />
                                                </div>
                                                <p>Ordenar sus finanzas</p>
                                            </Box>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} className="abajo">
                                        <FlechaDerecha style={{
                                            width: "80px"
                                        }} />
                                        <h4>sin límites</h4>
                                        <p className='mb-mt-20'>Con la oportunidad de entregar una alternativa de pago a quienes no poseen tarjetas.</p>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Section3