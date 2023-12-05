import Image from "next/legacy/image";
import styles from './page.module.css'


export default function Page() {
    return(
            <section className={styles.body}>
                <h2>VIP</h2>
                <h4>Tento server je volnočasová záležitost jak pro hráče, tak i pro ty, co tento server spravují.<br/>Bohužel se za hosting serveru musí platit. K tomu nám můžete pomoci vy! Peníze z VIP jdou zase zpět do serveru!<br/>A ještě za to dostanete výhody na serveru.</h4>
                <table className={styles.table}>
                    <tr>
                        <th>Výhody na serveru</th>
                        <th>VIP 1</th>
                        <th>VIP 2</th>
                        <th>VIP 3</th>
                    </tr>
                    <tr>
                        <th>Prefix</th>
                        <td>Vip</td>
                        <td>Vip+</td>
                        <td>Vip++</td>
                    </tr>
                    <tr>
                        <th>Klíč k VIP bedně</th>
                        <td>1</td>
                        <td>3</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>Vyhoda</th>
                        <td>Ano</td>
                        <td>Ano</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>Barevné písmo</th>
                        <td>Ne</td>
                        <td>Ano</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>Vyhoda</th>
                        <td>Ne</td>
                        <td>Ano</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>Vyhoda</th>
                        <td>Ne</td>
                        <td>Ne</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>Vyhoda</th>
                        <td>Ne</td>
                        <td>Ne</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>Vyhoda</th>
                        <td>Ne</td>
                        <td>Ne</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>Vyhoda</th>
                        <td>Ne</td>
                        <td>Ne</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>Cena</th>
                        <td>50kč</td>
                        <td>100kč</td>
                        <td>150kč</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td><a href="#"><button>Koupit</button></a></td>
                        <td><a href="#"><button>Koupit</button></a></td>
                        <td><a href="#"><button>Koupit</button></a></td>
                    </tr>
                </table>
            </section>
        );
}