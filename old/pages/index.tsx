import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {GoalItem} from "../components/goal-item";
import {List} from '../components/list';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Goals</title>
                <meta name="description" content="Goals app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <List>
                    <GoalItem>Goal 1</GoalItem>
                    <GoalItem>Goal 2</GoalItem>
                    <GoalItem>Goal 3</GoalItem>
                </List>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Home
