import PropTypes from 'prop-types';
import { Section, Title } from './SectionStyles';

export default function SectionFunc({ children, title }) {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}

SectionFunc.propTypes = {
  title: PropTypes.string,
};
