import styles from "./ContactsForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useState } from "react";

const ContactsForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!name || name.trim().length < 2) {
      setError("Please enter a valid name (at least 2 characters).");
      return;
    }

    const phoneRegExp = /^[0-9]{10}$/;
    if (!phoneRegExp.test(number)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Number
        <input type="tel" name="number" required />
      </label>
      {error && <div className={styles.error}>{error}</div>}{" "}
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactsForm;
