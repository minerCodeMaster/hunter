import styles from './page.module.css'
import Image from 'next/image';
import img from '../public/87371-3840x2160-desktop-4k-minecraft-wallpaper.jpg';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.imgdiv}>
                <Image alt='img' src={img} placeholder='blur' layout='fill' objectFit='cover' />
            </div>
            <div className={styles.uimgdiv}/>
            <h1>Hunterland</h1>
            <h5>Hraj, kopej a běž</h5>
            <div className={styles.nimgdiv}/>
        </header>
    );
}