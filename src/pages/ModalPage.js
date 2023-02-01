import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}    
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
            <p>
            In vel libero in odio tempus pellentesque. Aliquam erat volutpat. Nunc malesuada, libero ut maximus sagittis, quam urna molestie elit, a finibus nulla ligula et nisl. Nullam non purus justo. Nullam a sem scelerisque, vehicula sapien ut, pharetra magna. Nulla eget maximus tortor. Praesent pharetra augue semper magna dictum, eget posuere justo consectetur. Aliquam erat volutpat. Duis molestie orci ut nibh pharetra, non interdum tellus rhoncus. Fusce at lorem ut sem ultrices sagittis.
            </p>
        </div>
    );
};

export default ModalPage;