import logoConexos from "../../assets/logoConexos.png";
import { HeaderStyled, Container } from "./style";

export default function Header() {
    return (
        <>
            <HeaderStyled>
                <Container>
                    <img src={logoConexos} alt="logoConexos.png" />

                    <nav>
                        <ul>
                            <li>
                                <a href="#">Início</a>
                            </li>
                            <li>
                                <a href="#">Serviços</a>
                            </li>
                            <li>
                                <a href="#">Relatórios</a>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </HeaderStyled>
        </>
    );
}

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        /* para respeitar o limite de width e height */
    }

    body {
        /* tirando espaçamento padrão da janela */
        padding: 0;
        margin: 0;
    }
`;
