import Styles from './heading.module.scss';

const H2 = ({ text }) => {
  return <h2 className={Styles.heading2}>{text}</h2>;
};

export default H2;
