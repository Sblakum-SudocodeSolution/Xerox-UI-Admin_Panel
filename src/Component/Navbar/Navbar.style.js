import styled from "styled-components";

export const Header = styled.header`
  .input-nav {
    margin-left: 5rem !important;
    width: 25rem;
  }
  .icon {
    margin-left: 30rem !important;
  }

  @media (max-width: 920px) {
    .input-nav {
      display: none;
    }
  }
`;
