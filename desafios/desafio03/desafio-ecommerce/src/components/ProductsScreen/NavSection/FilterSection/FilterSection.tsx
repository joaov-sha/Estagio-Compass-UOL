import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import css from "./Filter.module.css";

function FilterSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={css.filter}>
      <h2>
        All Products
      </h2>
      <button onClick={() => setOpen(true)} >
        <FeatherIcon icon="sliders" className={css.filterIcon}/>
        <span>Filter</span>
      </button>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
}

export default FilterSection