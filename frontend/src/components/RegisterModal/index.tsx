import { FiArrowLeft } from "react-icons/fi";
import ReactModal from "react-modal";
import registerLogoImg from "../../assets/register-logo.svg";
import { Button, Container, Form, Info, InfoSection, InputGroup, Link } from "./styles";

type RegisterModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function RegisterModal({ isOpen, onRequestClose }: RegisterModalProps) {
    return (
        <ReactModal
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <Container>
                <Info>
                    <img src={registerLogoImg} alt="be the hero" />
                    <InfoSection>
                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    </InfoSection>
                    <Link onClick={onRequestClose}>
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o Logon
                    </Link>
                </Info>
                <Form>
                    <input type="text" placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input type="number" placeholder="Whatsapp" />
                    <InputGroup>
                        <input type="text" placeholder="Cidade" />
                        <input type="text" style={{ width: 80 }} placeholder="UF" />
                    </InputGroup>
                    <Button type="submit">Cadastrar</Button>
                </Form>
            </Container>
        </ReactModal>

    )
}