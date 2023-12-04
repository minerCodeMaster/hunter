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
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quos magni cum recusandae dolore officiis porro esse saepe dignissimos dolorum tempore labore vel, ducimus excepturi est ipsa id doloremque sed? <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vel, quidem ipsam nobis labore illo nam explicabo voluptas provident hic natus iure commodi? Mollitia quibusdam provident cumque velit, dolores est. Optio, inventore. Consequuntur aut provident explicabo ut optio assumenda distinctio!</h4>
                </div>
                </div>
                <h2 className={styles.f}>Survival</h2>
                <div className={styles.wrap}>
                <div className={styles.right}>
                    <div className={styles.text}>
                        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quos magni cum recusandae dolore officiis porro esse saepe dignissimos dolorum tempore labore vel, ducimus excepturi est ipsa id doloremque sed? <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vel, quidem ipsam nobis labore illo nam explicabo voluptas provident hic natus iure commodi? Mollitia quibusdam provident cumque velit, dolores est. Optio, inventore. Consequuntur aut provident explicabo ut optio assumenda distinctio!</h4>
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