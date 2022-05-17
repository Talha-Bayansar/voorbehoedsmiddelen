import Head from "next/head";
import styles from "../styles/Home.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anticonceptiemiddelen</title>
        <meta
          name="description"
          content="Website om te leren over anticonceptiemiddelen."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  );
}
