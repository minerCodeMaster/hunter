import Image from 'next/legacy/image';
import styles from './page.module.css'
import img from '../../public/pictures/villager.png'
import adampfp from '../../public/profiles/adampfp.png'
import hunterpfp from '../../public/profiles/hunterpfp.png'
import matypfp from '../../public/profiles/matypfp.jpg'
import minerpfp from '../../public/profiles/minerpfp.png'
import emptypfp from '../../public/profiles/emptypfp.png'

export default function Page() {
    return(
        <section className={styles.main}>
            <section className={styles.head}>
                <div className={styles.imgdiv}>
                    <Image src={img} alt='img' placeholder='blur' layout='fill' fit-content='cover'/>
                </div>
                <div className={styles.textdiv}>
                    <h2>Děláme co můžem!</h2>
                    <h3>I když se někdo občas může z našich rozhodnutí cítit ukřivděn, myslete pořád na to, že tyhle lidi, tu hrají a o server se starají ve svém volném čase a nemají z toho žádný výdělek.</h3>
                </div>
            </section>
            <section className={styles.body}>
                <div className={styles.ddiv}>
                    <div className={styles.ddiv1}></div>
                    <div className={styles.ddiv2}></div>
                    <div className={styles.ddiv3}></div>
                </div>

                <div className={styles.div1}>
                    <div className={styles.container}>
                        <div className={styles.imgcontainer}>
                            <Image src={adampfp} />
                        </div>
                        <h2>RandomAdam</h2>
                        <h4>Velký pracant, rád hraje minecraft a tak dále.</h4>
                    </div>
                </div>
                <div className={styles.div2}>
                    <div className={styles.container}>
                        <div className={styles.imgcontainer}>
                        <Image src={minerpfp} />
                        </div>
                        <h2>miner1235</h2>
                        <h4>Správce serveru, ten co stvořil tenhle web a tryhardí skyblock.</h4>
                    </div>
                </div>
                <div className={styles.div3}>
                    <div className={styles.container}>
                        <div className={styles.imgcontainer}>
                        <Image src={hunterpfp} />
                        </div>
                        <h2>thehunter212</h2>
                        <h4>Streamer, tryhard a dobrý kamarád.</h4>
                    </div>
                </div>
                <div className={styles.div4}>
                    <div className={styles.container}>
                        <div className={styles.imgcontainer}>
                        <Image src={matypfp} />
                        </div>
                        <h2>Novismaty_</h2>
                        <h4>Dobrý kamarád, co tryhardí na serveru 24/7.</h4>
                    </div>
                </div>
                <div className={styles.div5}>
                    <div className={styles.container}>
                        <div className={styles.imgcontainer}>
                        <Image src={emptypfp} />
                        </div>
                        <h2>Tady ještě nikdo není :c</h2>
                        <h4>Ale kdo ví, třeba tu příště budeš ty!</h4>
                    </div>
                </div>
                <div className={styles.div6}>
                    <div className={styles.container}>
                        <div className={styles.imgcontainer}>
                        <Image src={emptypfp} />
                        </div>
                        <h2>Tady ještě nikdo není :c</h2>
                        <h4>Ale kdo ví, třeba tu příště budeš ty!</h4>
                    </div>
                </div>

            </section>
        </section>
    );
}