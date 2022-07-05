import { Button, Container, Form, Link, SectionForm } from "./styles";
import { FiLogIn } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import heroes from "../../assets/peoples.png";

type LogonProps = {
    openModalRequest: () => void;
}
export function Logon({ openModalRequest }: LogonProps) {
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
                <Link onClick={openModalRequest}>
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
            </SectionForm>
            <img src={heroes} alt="heroes" />
        </Container>
    )
}