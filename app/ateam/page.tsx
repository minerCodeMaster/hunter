import Image from 'next/legacy/image';
import styles from './page.module.css'
import img from '../../public/87371-3840x2160-desktop-4k-minecraft-wallpaper.jpg'

export default function Page() {
    return(
        <section className={styles.main}>
            <section className={styles.head}>
                <div className={styles.imgdiv}>
                    <Image src={img} alt='img' placeholder='blur' layout='fill' fit-content='cover'/>
                </div>
                <div className={styles.textdiv}>
                    <h2>Děláme co můžem!</h2>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ex ipsa soluta fugit perspiciatis commodi quis repellendus sunt porro hic repudiandae eum libero quo ut, alias voluptas? Ab, voluptatum aperiam?</h3>
                </div>
            </section>
            <section className={styles.body}>

            </section>
        </section>
    );
}