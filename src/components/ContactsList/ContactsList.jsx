import PropTypes from 'prop-types';
import { ContactsItem, Button} from './ContactList.styled';

export const ContactsList = ({ contacts, deleteContact }) =>
    (
        <ul>
            {contacts.map(({id,name,number}) => (
                <ContactsItem key={id}>
                    {name}: {number}
                    <Button
                        type="button"
                        onClick={() => deleteContact(id)}
                    >
                        Delete
                    </Button>
                </ContactsItem>
            ))}
        </ul>
    );

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired,
};