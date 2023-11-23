'use client'

import Image from "next/legacy/image"
import styles from './page.module.css'
import img from '../public/vanilla.png'
import img2 from '../public/survival.png'
import img3 from '../public/castle.jpg'
import arrow from '../public/arrow-down.svg'
import Link from "next/link"

const imgStyle : {} = {width: '80%', height: '80%'};
const imgStyle2 : {} = {};
function scrollFunction1() {
  let e: any = document.getElementById("abt");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'center'
  })};


export default function Home() {
  return (
    <section className={styles.mainsection}>
      <div className={styles.chunkytext}>
        <h1>HRAJ.</h1>
        <h1>KOPEJ.</h1>
        <h1>BĚŽ.</h1>
        <div className={styles.chunkyimg}>
          <a onClick={scrollFunction1}>
            <Image src={arrow} layout="fill"/>
          </a>
        </div>
      </div>

      <div className={styles.aboutdiv} id="abt">
        <div className={styles.aboutimg}>
          <div className={styles.aboutimg2}>
            <Image src={img3} placeholder="blur" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.abouttext}>
          <h1>Nadpis</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore corrupti facere culpa enim consequatur perferendis sunt incidunt velit deserunt laboriosam dicta itaque voluptatibus, a eaque expedita sequi aliquam, tempora beatae praesentium doloribus delectus mollitia? Repellat eaque cum officiis nulla possimus, dolore consectetur ipsum dignissimos, ad delectus deleniti itaque blanditiis numquam quas quae distinctio facilis soluta quaerat ex! Architecto voluptatum dolorum nam tempore odio? Cumque voluptatem optio quis rem quasi neque ipsum officia totam possimus. Repellendus saepe porro illum sint!</h3>
        </div>
      </div>

      <div className={styles.triplet}>
        <div className={styles.a}>
          <div className={styles.img}>
            <Image src={img3} placeholder="blur" layout="fill" objectFit="cover" />
          </div>
          <h2>Nadpis</h2>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias vitae quod laboriosam. Facilis ad maiores placeat iusto, ipsam enim ea.</h3>
        </div>
        <div className={styles.b}>
        <div className={styles.img}>
            <Image src={img3} placeholder="blur" layout="fill" objectFit="cover" />
          </div>
          <h2>Nadpis</h2>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias vitae quod laboriosam. Facilis ad maiores placeat iusto, ipsam enim ea.</h3>
        </div>
        <div className={styles.c}>
        <div className={styles.img}>
            <Image src={img3} placeholder="blur" layout="fill" objectFit="cover" />
          </div>
          <h2>Nadpis</h2>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias vitae quod laboriosam. Facilis ad maiores placeat iusto, ipsam enim ea.</h3>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <Link href='#' >
            <div className={styles.linkbtn}>
              <h2>Zjisti víc!</h2>
            </div>
          </Link>
          <div className={styles.leftimg}>
            <Image src={img} placeholder="blur" style={imgStyle} alt="img" />
          </div>
          <div className={styles.lefttext}>
            <h2>Vanilla</h2>
            <h3>Ochutnejte krásné kouzlo klasického minecraftu bez všemožných úprav. Zahrajte si s přáteli. No... třeba postavíte ten největší hrad, co kdy svět viděl.</h3>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.righttext}>
            <h2>Survival</h2>
            <h3>Okořeňte si svůj zážitek ze hry různými vychytávkami, které jsme si pro vás připravili. Možnosti jsou nekonečné. Postavte si nejvyšší mrakodrap, obrovský podzemní bunkr, nebo jen klidnou farmu u moře.</h3>
          </div>
          <div className={styles.rightimg}>
            <Image src={img2} placeholder="blur" style={imgStyle} alt="img" />
          </div>
          <Link href='#' >
            <div className={styles.linkbtn}>
              <h2>Zjisti víc!</h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
