'use client'
import styles from './page.module.css';

function click(){
    alert('Momentálně nedostupné :(')
}

export default function Page() {
    return(
            <section className={styles.body}>
                <h2>VIP</h2>
                <h4>Tento server je volnočasová záležitost jak pro hráče, tak i pro ty, co tento server spravují.<br/>Bohužel se za hosting serveru musí platit. K tomu nám můžete pomoci vy! Peníze z VIP jdou zase zpět do serveru!<br/>A ještě za to dostanete výhody na serveru.</h4>
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <th>Výhody na serveru</th>
                        <th>VIP</th>
                        <th>VIP+</th>
                        <th>VIP++</th>
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
                        <td>10</td>
                    </tr>
                    <tr>
                        <th>Přídavek peněz</th>
                        <td>5000</td>
                        <td>11000</td>
                        <td>20000</td>
                    </tr>
                    <tr>
                        <th>Barevné písmo</th>
                        <td>Ne</td>
                        <td>Ano</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>/craft</th>
                        <td>Ne</td>
                        <td>Ano</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>/anvil</th>
                        <td>Ne</td>
                        <td>Ne</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>/et</th>
                        <td>Ne</td>
                        <td>Ne</td>
                        <td>Ano</td>
                    </tr>
                    <tr>
                        <th>/ec</th>
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
                        <td><a href="#"><button onClick={click}>Koupit</button></a></td>
                        <td><a href="#"><button onClick={click}>Koupit</button></a></td>
                        <td><a href="#"><button onClick={click}>Koupit</button></a></td>
                    </tr>
                    </tbody>
                </table>
            </section>
        );
}