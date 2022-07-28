import { useState } from "react";
import styles from './StructuresList.module.scss';

type StructuresListProps = {
  children: React.ReactNode;
}

const StructuresList = ({children}: StructuresListProps) => {
  return (
    <section className={styles.container}>
      <ul className={styles.listContainer}>
        {children}
      </ul>
    </section>
  );
}

export default StructuresList;