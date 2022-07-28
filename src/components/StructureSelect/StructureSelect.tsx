import { useRef, useState } from "react";
import styles from './StructureSelect.module.scss';

type Structure = {
  type: string;
  prefix: string;
  suffix: string;
  index?: number;
  children?: Structure[];
}

const structures: Structure[] = [
  {
    type: "object",
    prefix: "{",
    suffix: "}",
  },
  {
    type: "array",
    prefix: "[",
    suffix: "]",
  },
  {
    type: "string",
    prefix: '"',
    suffix: '"',
  },
  {
    type: "number",
    prefix: '',
    suffix: '',
  },
  {
    type: "boolean",
    prefix: '',
    suffix: '',
  }
];

type StructureSelectProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const StructureSelect = ({setCount}: StructureSelectProps) => {

  return (
    <section className={styles.container}>
      <select className={styles.select}>
        <option value=""> --- </option>
        {structures.map((structure, i) => (
          <option 
            key={structure.type}
            value={structure.type}
            className={styles.option}
          >
            {structure.type}
          </option>
        ))}
      </select>
    </section>
  );
}

export default StructureSelect;