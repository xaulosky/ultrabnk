import Icono1Seccion5 from '@/public/icons/section5/Icono1Seccion5'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Section5 = () => {
    return (
        <Grid item xs={12} className="section5">
            <Container>
                <Grid container>
                    <Grid item xs={12} className="lista">

                        <div className='tarjetita'>
                            <Icono1Seccion5 />
                            <p>Iniciar tu negocio Fintech en tres meses, en toda la región.</p>
                            <div className='franja'></div>
                        </div>
                        <div className='tarjetita'>
                            <Icono1Seccion5 />
                            <p>Iniciar tu negocio Fintech en tres meses, en toda la región.</p>
                            <div className='franja'></div>

                        </div>
                        <div className='tarjetita'>
                            <Icono1Seccion5 />
                            <p>Iniciar tu negocio Fintech en tres meses, en toda la región.</p>
                            <div className='franja'></div>

                        </div>
                        <div className='tarjetita'>
                            <Icono1Seccion5 />
                            <p>Iniciar tu negocio Fintech en tres meses, en toda la región.</p>
                            <div className='franja'></div>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Section5