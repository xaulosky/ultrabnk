import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Grid } from '@mui/material'
import Section1 from '@/screens/home/Section1'
import Section2 from '@/screens/home/Section2'
import Section3 from '@/screens/home/Section3'
import Section4 from '@/screens/home/Section4'
import { useEffect } from 'react'
import Section5 from '@/screens/home/Section5'
import Section6 from '@/screens/home/Section6'
import Section7 from '@/screens/home/Section7'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  useEffect(() => {

    const listaAnimaciones = ['fadeIn', 'fadeInLeft', 'fadeInRight', 'fadeInDown', 'fadeInUp']
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animation = listaAnimaciones.find(anim => entry.target.classList.contains(anim));
          if (animation) {
            entry.target.classList.add("animate__animated", `animate__${animation}`);
          }
          entry.target.classList.remove("animate__fadeOut");
        } else {
          const animation = listaAnimaciones.find(anim => entry.target.classList.contains(anim));
          if (animation) {
            entry.target.classList.remove(`animate__${animation}`);
          }
          if (!observer || !observer.root || !observer.root.contains(entry.target)) {
            entry.target.classList.remove("animate__animated");
          }
          entry.target.classList.add("animate__fadeOut");
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.fadeIn, .fadeInLeft, .fadeInRight, .fadeInDown, .fadeInUp');
    hiddenElements.forEach(el => observer.observe(el));


  }, []);

  return (
    <>
      <Head>
        <title>UltraBNK</title>
        <meta name="description" content="Descripción importante" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Grid container>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />


        </Grid>
      </main>
    </>
  )
}
