import { Button, Container, Form, SectionForm } from "./styles";
import { FiLogIn } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import heroes from "../../assets/peoples.png";
import { useState } from "react";
import Modal from "react-modal";

export function Logon() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenRegistrationModal() {
        setIsOpen(true);
    }

    function handleCloseRegistrationModal() {
        setIsOpen(false);
    }

    return (
        <Container>
            <SectionForm>
                <img src={logo} alt="be the hero" />
                <Form>
                    <h1>Faça seu Logon</h1>
                    <input
                        type="text"
                        placeholder="Seu ID"
                    />
                </Form>
                <Button type="submit">Entrar</Button>
                <div>
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </div>
                <Modal
                    isOpen={isOpen}
                    onAfterClose={handleCloseRegistrationModal}
                    onAfterOpen={handleOpenRegistrationModal}
                >

                </Modal>
            </SectionForm>
            <img src={heroes} alt="heroes" />
        </Container>
    )
}