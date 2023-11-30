'use client'

import Image from "next/legacy/image"
import styles from './page.module.css'
import img from '../public/pictures/vanilla.png'
import img2 from '../public/pictures/survival.png'
import img3 from '../public/pictures/castle.jpg'
import arrow from '../public/pictures/arrow-down.svg'
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
          <h1>A že to za to stojí!</h1>
          <h3>Ještě poměrně nedávno naše komunita utrpěla velkou ztrátu. Byl zrušen server. Nebyl to však ledajaký server. Byl to server, který hostil naší komunitu už pěkných pár let. Byla to nejdřív Sakura a potom Hyperonie? Nebo jinak? Ten první byl možná Hitcraft. To už je ale jedno. Důležité je, že ta komunita přetrvává. Sem tam někdo odejde a někdo přijde. Zažili jsme spolu desítky hodin zábavy a ještě to nekončí. Stojí to za to.</h3>
        </div>
      </div>

      <div className={styles.triplet}>
        <Link  style={{textDecoration:'none'}} href='/ateam'>
        <div className={styles.a}>
          <div className={styles.img}>
            <Image src={img3} placeholder="blur" layout="fill" objectFit="cover" />
          </div>
          <h2>Přátelský moderátorský tým</h2>
          <h3>V našem moderátorském týmu najdete jen pečlivé a spravedlivé členy, kteří vám rádi pomohou.</h3>
        </div>
        </Link>
        <Link  style={{textDecoration:'none'}} href='/vip'>
        <div className={styles.b}>
        <div className={styles.img}>
            <Image src={img3} placeholder="blur" layout="fill" objectFit="cover" />
          </div>
          <h2>Možnost podpořit server</h2>
          <h3>Tenhle server děláme ve volném čase a nemáme z něj výdělek. Musíme ale stejně platit za hosting. Když si koupíte VIP tak nejen, že podpoříte server, ale ještě budete mít výhody na serveru!</h3>
        </div>
        </Link>
        <Link href='https://www.twitch.tv/hunterovec579'  style={{textDecoration:'none'}}>
        <div className={styles.c}>
        <div className={styles.img}>
            <Image src={img3} placeholder="blur" layout="fill" objectFit="cover" />
          </div>
          <h2>A livestreamy ze serveru!</h2>
          <h3>Na twitchi se můžete připojit k pravidelným livestreamům ze serveru a kdo ví, třeba si tam i najít nové kamarády.</h3>
        </div>
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <Link href='/snv'  style={{textDecoration:'none'}}>
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
          <Link href='/snv'  style={{textDecoration:'none'}}>
            <div className={styles.linkbtn}>
              <h2>Zjisti víc!</h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
