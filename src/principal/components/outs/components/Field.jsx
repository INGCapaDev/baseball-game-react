/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {classNames} from '../../../../utils/classes'

const Field = (props) => {
  return (
    <div className="py-1 pr-1">
      <div className={classNames("h-full w-full bg-white", props.bgColor)} onClick={props.onClick}></div>
    </div>
  );
};

export default Field;
