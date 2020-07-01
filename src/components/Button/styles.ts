import styled from 'styled-components'

interface ContainerProps {
  color: 'grey' | 'opaque' | 'purple' | 'green' | 'orange' | 'pink' | 'cyan' | 'red' | 'yellow';
}

export const Container = styled.button<ContainerProps>`
  height: 42px;
  background: ${props => props.theme.colors[props.color]};
  border: 0;
  border-radius: 4px;
  color: #FFF;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 14px;

  cursor: pointer;
  transition: opacity 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`
