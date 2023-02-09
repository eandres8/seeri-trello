import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styles from "@/styles/Home.module.scss";
import { Header, ListItems, NewItemList } from "@/components/custom";
import { useItemContext } from "../application/context/ItemsContext";

export default function Home() {
  const {
    itemsState: { listGroups },
    loadGroupList,
    authState,
  } = useItemContext();
  const router = useRouter();

  useEffect(() => {
    if (!authState.isAuthenticated) {
      router.replace("/auth/login");
      return;
    }

    loadGroupList();
  }, []);

  return authState.isAuthenticated ? (
    <>
      <Head>
        <title>..:: Dashboard ::..</title>
        <meta name="description" content="Dashboard to display task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <section className={styles.container}>
          <div className={styles.content}>
            {listGroups.map((group) => (
              <ListItems key={group.id} group={group} />
            ))}
            <NewItemList />
          </div>
        </section>
      </main>
    </>
  ) : (
    <></>
  );
}
