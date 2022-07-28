import { NextPage } from "next";
import React, { useRef, useState } from "react";
import StructureSelect from "../../components/StructureSelect/StructureSelect";
import StructuresList from "../../components/StructuresList/StructuresList";
import { FaArrowDown } from "react-icons/fa"
import styles from "./index.module.scss";

const Builder: NextPage = () => {
  const [count, setCount] = useState(1);
  const selectRef = useRef<HTMLSelectElement>(null);

  const selectors = [];

  for (let i = 0; i < count; i++) {
    selectors.push(
        <StructureSelect key={i} setCount={setCount} />
    );
    if (count > 1 && i !== count - 1) {
      selectors.push(
        <FaArrowDown />
      );
    }
  }

  return (
    <section className={styles.container}>
      <h2>Builder</h2>
      <div>TODO: automatically add more options below when select has a valid option</div>
      <div>TODO: Display string sample of nested selections</div>
      <div className={styles.buttonContainer}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div className={styles.listContainer}>
        <StructuresList>
          {selectors}
        </StructuresList>
      </div>
    </section>
  );
};

export default Builder;