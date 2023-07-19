import styled from "styled-components";

export const EditModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(18, 18, 20, 0.7);
  transform: translate(-19.79px, -20px);
  .container {
    max-width: 340px;
    width: 340px;
    border-radius: var(--radius-03);
    overflow: hidden;
  }
  .div-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-2);
    width: 100%;
    height: 60px;
    padding: 20px;
    padding-bottom: 40px;
  }
  .title {
    font-size: 16px;
    height: 20px;
    color: white;
    transform: translate(0, -30px);
  }
  .btn-close {
    height: 20px;
    color: white;
    background-color: var(--grey-2);
    border: none;
  }
  .form-content {
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    width: 100%;
    padding: 20px;
  }
  label {
    margin-bottom: 10px;
    font-size: var(--font-size-4);
  }
  input,
  button,
  .select {
    height: 40px;
    padding: 10px;
    border-radius: var(--radius-03);
    border: none;
  }
  .input-modal {
    background-color: var(--grey-2);
    color: white;
    margin-bottom: 20px;
  }
  .select {
    margin-bottom: 20px;
    background-color: var(--grey-2);
    color: white;
  }
  .btn-send {
    background-color: var(--color-primary);
    color: white;
    width: 60%;
  }
  .btn-send:hover {
    background-color: var(--color-primary-2);
  }
  .btn-fotter {
    display: flex;
    justify-content: space-between;
  }
  .btn-del {
    width: 35%;
    color: white;
    background-color: var(--grey-1);
  }
  .btn-del:hover {
    background-color: var(--grey-2);
  }
`;
