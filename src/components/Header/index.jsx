import styles from './Header.module.css'

function Header(){

    return(
        <header className={styles.Header}>
            <div className={styles.container}>
                <button className={styles.btn} > <a href="/america" >AMÉRICA</a> </button>
                <button className={styles.btn}> <a href="/africa" >ÁFRICA</a> </button>
                <button className={styles.btn}> <a href="/asia" >ÁSIA</a> </button>
                <button className={styles.btn}> <a href="/europa" >EUROPA</a> </button>
                <button className={styles.btn}> <a href="/oceania" >OCEANIA</a> </button>
                
            </div>
            

        </header>
    )
}
export default Header