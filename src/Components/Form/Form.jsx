import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FormElement, InputElement, ButtonElement } from '../../styledComponents';
import { useFormik } from 'formik';
import { actions } from '../../store';
import { basicSchema } from '../../schemas';

export default function Form({updateData, data}) {
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();

  const off = () => {
    dispatch(actions.unshow());
  };

  const onSubmit = (values) => {
    const newItem = { ...values };
    localStorage.setItem('todo', JSON.stringify([...data, newItem]));
    updateData([...data, newItem]);

        dispatch(actions.unshow());
        console.log(show) ;
  };

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      description: '',
      isCompleted: false,
    },
    validationSchema: basicSchema,
    onSubmit, // Ensure onSubmit is referenced correctly here
  });

  return (
    <div>
      <Modal show={show} onHide={off}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add a task with excitement! Start strong, finish stronger{' '}
            <FontAwesomeIcon icon={faClipboardCheck} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormElement onSubmit={handleSubmit}>
            <InputElement
              placeholder="Name"
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? 'input-error' : ''}
            />
            {errors.name && touched.name && <pre className="error">{errors.name} </pre>}
            <br />
            <InputElement
              placeholder="Description"
              id="description"
              type="text"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.description && touched.description ? 'input-error' : ''}
            />
            {errors.description && touched.description && <pre className="error">{errors.description} </pre>}
            <br />
            <ButtonElement type="submit">Add</ButtonElement>
          </FormElement>
        </Modal.Body>
      </Modal>
    </div>
  );
}
