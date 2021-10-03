import PropTypes from 'prop-types';

const listShape = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.string
    }))
]);

export default listShape;
