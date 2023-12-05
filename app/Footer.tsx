import styles from './page.module.css'
import Image from "next/legacy/image"
import img from '../public/pictures/HUNTER_SERVER_small.png'
import img2 from '../public/pictures/castle1.png';

const imgStyle : {} = {width: '100%', height: '100%'};

export default function Footer() {

return (
    <footer className={styles.footer}>
        <div className={styles.fimgdiv}>
            <Image alt='img' src={img2} placeholder='blur' layout='fill' />
        </div>
        <div className={styles.fuimgdiv}/>
        <div className={styles.fnimgdiv}/>
        <div className={styles.footerleft}>
            <h3>Kontakt:</h3>
            <a href="mailto:podpora@hunterland.cz">info@hunterland.cz</a>
            <a href='https://discord.gg/4SegMdKNkZ'>Discord</a>
            <a href='https://www.instagram.com/hunterland.cz/'>Instagram</a>
        </div>
        <div className={styles.footerright}>
            <h3>Odkazy:</h3>
            <a href='/ateam'>A-team</a>
            <a href='/snv'>Survival a Vanilla</a>
            <a href='/vip'>VIP</a>
        </div>
        <div className={styles.footerlogo}>
            <Image alt='img' src={img} placeholder='blur' style={imgStyle} />
            <h3>made by miner</h3>
        </div>
    </footer>
);
}
