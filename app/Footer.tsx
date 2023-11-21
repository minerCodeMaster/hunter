import styles from './page.module.css'
import Image from 'next/image'
import img from '../public/HUNTER_SERVER.png'

const imgStyle : {} = {objectFit: 'contain'};

export default function Footer() {

return (
    <footer className={styles.footer}>
        
        <div className={styles.footertop}>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum veniam eum, impedit quia suscipit voluptate qui odit soluta expedita minus laudantium praesentium est amet repellendus enim ullam dolorem? Ab repellendus doloribus ea odit est. Amet fugiat officiis eligendi? Dignissimos, possimus?</h3>
        </div>
        <div className={styles.footerleft}>
            <h3>Kontakt:</h3>
            <a href="mailto:minerminarik@gmail.com">info@hunterland.com</a>
            <a href='#'>Discord</a>
            <a href='#'>Instagram</a>
        </div>
        <div className={styles.footerright}>
            <h3>Odkazy:</h3>
            <a href='#'>A-team</a>
            <a href='#'>Minihry</a>
            <a href='#'>VIP</a>
        </div>
        <div className={styles.footerlogo}>
            <Image alt='img' src={img} style={imgStyle} />
            <h3>made by miner</h3>
        </div>
    </footer>
);
}
