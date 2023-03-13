import Icono1Seccion5 from '@/public/icons/section5/Icono1Seccion5'
import TarjetasSecciion5 from '@/public/icons/section6/TarjetasSeccion5'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Section5 = () => {
    return (
        <Grid item xs={12} className="section5" style={{
            marginTop: "-100px",
            paddingBottom: "100px"
        }}>
            <div>

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