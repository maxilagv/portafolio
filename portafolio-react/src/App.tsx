import { Helmet, HelmetProvider } from 'react-helmet-async'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Hero from '@sections/Hero'
import About from '@sections/About'
import Experience from '@sections/Experience'
import Projects from '@sections/Projects'
import Skills from '@sections/Skills'
import Contact from '@sections/Contact'
import ScrollProgress from '@components/ScrollProgress'
import SectionDivider from '@components/SectionDivider'
import Background3D from '@components/bg/Background3D'
import Orbs from '@components/bg/Orbs'
import NoiseOverlay from '@components/bg/NoiseOverlay'
import GridOverlay from '@components/bg/GridOverlay'
import ParticlesCanvas from '@components/bg/ParticlesCanvas'
import { VisualQualityProvider } from '@context/VisualQualityContext'
import Showcase from '@sections/Showcase'

export default function App() {
  return (
    <HelmetProvider>
      <VisualQualityProvider>
        <ScrollProgress />
        <Background3D />
        <ParticlesCanvas />
        <GridOverlay />
        <Orbs />
        <NoiseOverlay />
        <div className="min-h-dvh flex flex-col">
          <Helmet>
            <title>Portafolio - Máximo Lavagetto</title>
            <meta name="description" content="Desarrollador Full Stack - Portafolio" />
          </Helmet>
          <Navbar />
          <main className="flex-1">
            <section id="inicio"><Hero /></section>
            <SectionDivider variant="wave" />
            <section id="sobre-mi"><About /></section>
            <SectionDivider variant="tilt" />
            <section id="experiencia"><Experience /></section>
            <SectionDivider variant="wave" />
            <section id="proyectos"><Projects /></section>
            <SectionDivider variant="tilt" />
            <section id="habilidades"><Skills /></section>
            <SectionDivider variant="wave" />
            <section id="contacto"><Contact /></section>
            <SectionDivider variant="tilt" />
            <section id="showcase"><Showcase /></section>
          </main>
          <Footer />
        </div>
      </VisualQualityProvider>
    </HelmetProvider>
  )
}
