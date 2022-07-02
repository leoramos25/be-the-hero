import { Button, Container, Form, SectionForm } from "./styles";
import { FiLogIn } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import heroes from "../../assets/peoples.png";

export function Logon() {
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
            </SectionForm>
            <img src={heroes} alt="heroes" />
        </Container>
    )
}