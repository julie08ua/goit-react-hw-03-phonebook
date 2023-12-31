import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

const STORAGE_KEY = 'contacts';

export class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    componentDidMount() {
        const savedContactsState = localStorage.getItem(STORAGE_KEY);

        if (savedContactsState !== null) {
            this.setState({ contacts: JSON.parse(savedContactsState) });
        }
    };

    componentDidUpdate(_, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
        }
    };

    formSubmit = data => {
        const checkName = this.state.contacts.find(
                ({name}) => name.toLowerCase() === data.name.toLowerCase()
        )
        
        if (checkName) {
            alert(`${data.name} is already in contacts.`);
        } else {
            this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
          }
    };

    deleteContact = id => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
    };

    changeFilter = ({target}) => {
        this.setState({ filter: target.value });
    };

    render() {
        const { contacts, filter } = this.state;
        const visibleContact = contacts.filter(({name}) =>
            name.toLowerCase().includes(filter.toLowerCase())
        );

        return (
            <section>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmit} />

                <h2>Contacts:</h2>
                <Filter value={filter} changeFilter={this.changeFilter} />
                {contacts.length > 0 && (
                    <ContactsList
                        contacts={visibleContact}
                        deleteContact={this.deleteContact}
                    />
                )}
            </section>
        );
    }
}