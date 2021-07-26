
import Nav from "./../components/Nav";
import Header from "./../components/Header"
import styles from "./../styles/Layout.module.css"

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
        <div className={styles.containrer}>
            <main className={styles.main}>
                <Header />
                { children }
            </main>
        </div>

        </>
    )
}

export default Layout;
