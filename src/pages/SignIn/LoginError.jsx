import styled from "styled-components";

const Warning = styled.div`
  background-color: var(--primaryRed);
`;

const LoginError = () => {
  return (
    <Warning className="card card-body mb-4 text-danger border-0">
      Masukkan username dan password yang benar. Perhatikan penggunaan huruf
      kapital.
    </Warning>
  );
};
export default LoginError;
