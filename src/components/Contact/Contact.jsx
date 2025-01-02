import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={styles.item}>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
