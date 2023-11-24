import styles from './page.module.css'
import Image from "next/legacy/image"
import img from '../public/HUNTER_SERVER_small.png'
import img2 from '../public/87371-3840x2160-desktop-4k-minecraft-wallpaper.jpg'

const imgStyle : {} = {width: '100%', height: '100%'};

export default function Footer() {

return (
    <footer className={styles.footer}>
        <div className={styles.fimgdiv}>
            <Image alt='img' src={img2} placeholder='blur' layout='fill' />
        </div>
        <div className={styles.fuimgdiv}/>
        <div className={styles.fnimgdiv}/>
        <div className={styles.footertop}>
            <h3>Hunterland je malý český minecraft server. Je to takový nástupce jednoho serveru jedné komunity. Teď do něj dává komunita svojí práci a snaží se zajistit příjemné hraní.</h3>
        </div>
        <div className={styles.footerleft}>
            <h3>Kontakt:</h3>
            <a href="mailto:minerminarik@gmail.com">info@hunterland.com</a>
            <a href='https://discord.gg/4SegMdKNkZ'>Discord</a>
            <a href='#'>Instagram</a>
        </div>
        <div className={styles.footerright}>
            <h3>Odkazy:</h3>
            <a href='#'>A-team</a>
            <a href='#'>Survival a Vanilla</a>
            <a href='#'>VIP</a>
        </div>
        <div className={styles.footerlogo}>
            <Image alt='img' src={img} placeholder='blur' style={imgStyle} />
            <h3>made by miner</h3>
        </div>
    </footer>
);
}
