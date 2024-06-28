import PropTypes from 'prop-types';
import { SideBarBtn } from './GoBackBtn.styled';

export default function GoBackBtn({ handleCloseClick }) {
  return (
    <SideBarBtn type="button" onClick={handleCloseClick}>
      <svg
        width="16"
        height="10"
        viewBox="0 0 15 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </SideBarBtn>
  );
}

GoBackBtn.propTypes = { handleCloseClick: PropTypes.func };
