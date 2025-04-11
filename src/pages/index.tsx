import Head from 'next/head'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import BenefitsSection from '../components/BenefitsSection'
import CallToAction from '../components/CallToAction'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Institutional Home</title>
        <meta name="description" content="Descrição da página institucional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />

      <BenefitsSection />

      <CallToAction />

      <Newsletter />

      <Footer />
    </>
  )
}
