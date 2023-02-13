// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

import {
    About,
    Footer,
    Header,
    Skills,
    Testimonials,
    Work,
} from "../containers";
import { Navbar } from "../components";
import { useRef } from "react";
import { pageSections } from "../constants/text";
import Head from "next/head";
import images from "../constants/images";




export default function Home() {
    const refs = useRef([] as HTMLDivElement[])
    refs.current = []; //problems
    return (
        <div className="app">
            <Head>
            <title>MOHAMMED</title>
                <meta
                    name="description"
                    content="Web developer portfolio"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={images.logo.src} />
            </Head>
            <Navbar refs={refs.current} />
            <div id={pageSections[0]} ref={rf => rf != null? refs.current.push(rf) : ""} >
                <Header />
            </div>
            <div id={pageSections[1]} ref={rf => rf != null? refs.current.push(rf) : ""} >
                <About />
            </div>
            <div id={pageSections[2]} ref={rf => rf != null? refs.current.push(rf) : ""} >
                <Work />
            </div>
            <div id={pageSections[3]} ref={rf => rf != null? refs.current.push(rf) : ""} >
                <Skills />
            </div>
            <div id={pageSections[4]} ref={rf => rf != null? refs.current.push(rf) : ""}>
                <Testimonials />
            </div>
            <div id={pageSections[4]} ref={rf => rf != null? refs.current.push(rf) : ""}>
                <Footer />
            </div>
        </div>
    );
}
