import styled from "styled-components";

export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100vw;
  border-bottom: 1px solid var(--grey-2);
  padding: 20px 0 20px 0;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  .logo {
    color: var(--color-primary);
    font-size: var(--font-size-2);
  }
  .btn-logout {
    padding: 8px;
    background-color: var(--grey-2);
    border: none;
    color: white;
    border-radius: var(--radius-03);
    text-decoration: none;
  }
  .btn-logout:hover {
    background-color: var(--grey-1);
  }
`;
