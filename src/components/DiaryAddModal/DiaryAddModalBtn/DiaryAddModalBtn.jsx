import { AddBtn, Cross } from './DiaryAddModalBtn.styled';
import PropTypes from 'prop-types';

export default function DiaryAddModalBtn({
  onClick,
  type = 'submit',
  errorState,
  state,
}) {
  return (
    <AddBtn type={type} disabled={errorState} onClick={onClick}>
      <Cross
        state={state}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.72 7.96003H7.95997V13.72H6.03997V7.96003H0.279968V6.04003H6.03997V0.280029H7.95997V6.04003H13.72V7.96003Z"
          fill="white"
        />
      </Cross>
    </AddBtn>
  );
}
DiaryAddModalBtn.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  state: PropTypes.string,
};
