import UltraBNKlogo from '@/public/imgs/UltraBNKlogo'
import { Grid } from '@mui/material'
import React from 'react'
import TarjetaMasterCard from '@/public/icons/TarjetaMasterCard'
import IconosSeccion1 from '@/public/icons/IconosSeccion1'
import Fondo1 from '@/public/imgs/Fondo1'


const Section1 = () => {
    return (
        <Grid item xs={12} className="section1"
            sx={{
                height: "70vh",
                minHeight: { xs: "600px", md: "100vh" }
            }}
        >
            <div style={{
                zIndex: "-1",
                position: "absolute",
                top: "-100 !important",
                left: "0",
                right: "0",
                display: "flex",
                justifyContent: "center"
            }}>
                <Fondo1 style={{
                    width: "800px",
                }} />
            </div>
            <Grid container style={{
                height: "75vh",
                minHeight: "500px",
                zIndex: 2
            }} spacing={0}>
                <Grid item xs={12} style={{}}>
                </Grid>
                <Grid item xs={12} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "0"
                }} >

                    <img src="imgs/logotipo.svg" alt="" style={{
                        width: "90%",
                        maxWidth: "700px"
                    }} />

                    {/* <UltraBNKlogo style={{
                        maxWidth: "80%",
                        width: "700px"
                    }} /> */}
                </Grid>
                <Grid item xs={12} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "0"
                }}>
                    <h1 style={{
                        marginBottom: "50px",
                        marginTop: "-100px"
                    }}>TU BILLETERA VIRTUAL <b>SIN FRONTERAS</b> </h1>
                    <IconosSeccion1 className="iconosSeccion1" />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Section1