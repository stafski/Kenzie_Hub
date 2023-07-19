import styled from "styled-components";

export const Div = styled.div`
  margin-top: 30px;
  width: 30%;
  max-width: 400px;
  min-width: 300px;
  .div-title-and-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title-register {
    color: var(--color-primary);
    font-size: var(--font-size-2);
  }
  .register {
    color: white;
    font-size: var(--font-size-3);
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .btn-back {
    font-size: var(--font-size-5);
    font-weight: 600;
    background-color: var(--grey-2);
    border: none;
    color: white;
    padding: 8px;
    border-radius: var(--radius-03);
    text-decoration: none;
  }
  .btn-back:hover {
    background-color: var(--grey-1);
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grey-3);
    margin-top: 25px;
    padding: 0 20px 0 20px;
  }
  input {
    width: 100%;
    background-color: var(--grey-2);
    margin-bottom: 20px;
    height: 40px;
    border-radius: var(--radius-03);
    color: var(--white);
    padding-left: 10px;
    margin-top: 10px;
    border: 1px solid var(--grey-1);
  }
  input:focus {
    border-color: var(--color-primary);
    outline: 0;
  }
  .btn-register {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    border-radius: var(--radius-03);
    border: none;
  }
  .btn-register:hover {
    background-color: var(--color-primary-2);
  }
  label {
    color: white;
    font-size: var(--font-size-5);
  }
  .advice {
    color: var(--grey-1);
    font-size: var(--font-size-5);
    margin-bottom: 10px;
  }
  .div-bio,
  .div-register-name,
  .div-register-email,
  .div-register-password,
  .div-confirm-password,
  .div-contact {
    width: 100%;
  }
  #module {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    padding-left: 10px;
    background-color: var(--grey-2);
    border: none;
    color: var(--grey-1);
  }
  #module:focus {
    outline: none;
  }
  .btn-register {
    background-color: var(--color-primary);
    color: white;
  }
  .div-select {
    width: 100%;
  }
  .p-select {
    color: white;
    font-size: var(--font-size-5);
    margin-bottom: 10px;
  }
  .error-msg {
    color: var(--negative);
    font-size: var(--font-size-5);
    text-align: center;
    font-weight: 600;
  }
`;
