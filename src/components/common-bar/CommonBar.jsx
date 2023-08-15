/* eslint-disable react/prop-types */
import './index.less';

export default function CommonBar(props) {
  const { bg, type, color, children } = props;

  return (
    <div className={`common-bar ${type === 'small' ? 'pc-s' : 'pc-l'}`}>
      <img src={bg} alt="bg" className="bg" />
      <div className={`text ${color === 'b' ? 'cb' : 'cg'}`}>{children}</div>
    </div>
  );
}
