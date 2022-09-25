import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import s from './form.module.scss';
import PropTypes from 'prop-types';

const INITIAL_STATE = { name: '', number: '' };

export default class Form extends Component {
  state = INITIAL_STATE;
  static propTypes = {
    handleAddContact: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddContact({ ...this.state, id: uuid() });
    this.reset();
  };

  handleInputValue = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  reset = () => this.setState(INITIAL_STATE);

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleInputValue } = this;
    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.formLabel}>
          <span>Name</span>
          <input
            className={s.forminput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputValue}
          />
        </label>
        <label className={s.formLabel}>
          <span>Number</span>
          <input
            className={s.forminput}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputValue}
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
