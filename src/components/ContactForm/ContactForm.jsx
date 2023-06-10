import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {Input, Button,Text} from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    
    handleChange = ({target}) => {
        this.setState({ [target.name]: target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const id = nanoid();
        this.props.onSubmit({...this.state, id});
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <Text>Name</Text>
                    <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    <Text>Number</Text>
                    <Input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                
                <Button type="submit">Add contact</Button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};