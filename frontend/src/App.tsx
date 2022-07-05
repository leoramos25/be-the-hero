import { useState } from "react";
import { RegisterModal } from "./components/RegisterModal";
import { Logon } from "./pages/Logon";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  function handleCloseRegisterModal() {
    setRegisterModalIsOpen(false);
  }

  function handleOpenRegisterModal() {
    setRegisterModalIsOpen(true)
  }

  return (
    <>
      <Logon openModalRequest={handleOpenRegisterModal} />
      <RegisterModal isOpen={registerModalIsOpen} onRequestClose={handleCloseRegisterModal} />
      <GlobalStyle />
    </>
  );
}
