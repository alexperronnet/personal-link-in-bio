import styled from "styled-components"
import { Svg } from "~/components"

export const LinksCard = ({ href, icon, type }) => {
  return (
    <StyledLinksCard>
      <a href={href}>
        <Svg name={icon} />
        {type}
      </a>
    </StyledLinksCard>
  )
}

const StyledLinksCard = styled.li`
  a {
    background-color: ${({ theme }) => theme.background["02"]};
    border-radius: 0.8rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: currentColor;
    padding: 1.4rem;
    transition: all 150ms ease-in-out;
    outline: 0.2rem solid transparent;

    &:hover {
      color: ${({ theme }) => theme.foreground["02"]};
      outline: 0.2rem solid ${({ theme }) => theme.border};
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      transform: translateY(-0.4rem);

      svg {
        opacity: 1;
      }
    }

    svg {
      width: 2.4rem;
      height: auto;
      position: absolute;
      left: 1.4rem;
      fill: currentColor;
      opacity: 0.5;
    }

    @media screen and (max-width: 640px) {
      font-size: var(--fs-sm);
    }
  }
`
