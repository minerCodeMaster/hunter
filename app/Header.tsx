import styles from './page.module.css'
import Image from "next/legacy/image";
import img from '../public/pictures/castle1.png';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.imgdiv}>
                <Image alt='img' src={img} placeholder='blur' layout='fill' objectFit='cover' />
            </div>
            <div className={styles.uimgdiv}/>
            <Link href='/' style={{textDecoration: 'none'}}><h1>Hunterland</h1></Link>
            <h5>play.hunterland.cz</h5>
            <div className={styles.nimgdiv}/>
        </header>
    );
}