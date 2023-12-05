import styles from './page.module.css'
import Image from 'next/legacy/image';
import Link from 'next/link';
import img from '../../public/pictures/castle.jpg'

const imgStyle : {} = {width: '200%', height: '100%'};


export default function Page() {
    return(
        <section className={styles.main}>
            <section className={styles.body}>
                <h2>Vanilla</h2>
                <div className={styles.wrap}>
                <div className={styles.left}>
                    <div className={styles.img}>
                        <Image src={img} alt='img' placeholder='blur' style={imgStyle}/>
                    </div>
                    <h4>Vanilla na našem serveru má všechno, co má vanilla mít, tedy vlastně memá nic, skoro nic. Přece jen má naše Vanilla něco speciálního. To je naše custom generace světa. Čekají na vás totiž obrovské hory, i široká údolí, vesnice, které přímo oživnou a stromy, které mají svůj charakter.<br/>Jinak má ale naše Vanilla prostou herní mechaniku s tím, co má minecraft mít. Klasické kopání diamantů, nebezpečné prozkoumávání pekelného netheru a skoro prázdný End.</h4>
                </div>
                </div>
                <h2 className={styles.f}>Survival</h2>
                <div className={styles.wrap}>
                <div className={styles.right}>
                    <div className={styles.text}>
                        <h4>Náš Survival na druhou stranu není tak prostý. Je tam ekonomika, hráči mají více možností, i ta herní mechanika je vylepšená. Prostě je to zase úplně jiný zážitek. Survival nám dává hodně práce a je velmi obsáhlý. Proto budeme rádi, když nám dáte vědět, když najdete nějakou chybu.</h4>
                    </div>
                    <div className={styles.img}>
                        <Image src={img} alt='img' placeholder='blur' style={imgStyle}/>
                    </div>
                </div>
                </div>
            </section>
        </section>
    );
}