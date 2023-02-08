import Head from 'next/head';

import styles from '@/styles/Home.module.scss';
import { Header, ListItems, NewItem, NewItemList } from '@/components/custom';

export default function Home() {
  return (
    <>
      <Head>
        <title>..:: Dashboard ::..</title>
        <meta name="description" content="Dashboard to display task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <section className={styles.content}>
          <ListItems title='TODO' />
          <ListItems title='TODO' />
          <NewItemList />
        </section>
      </main>
    </>
  )
}
