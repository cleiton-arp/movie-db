import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import {
  Card,
  Page,
  Title,
  Subtitle,
  SvgWrapper,
  Actions,
  Left,
  PrimaryButton,
  Right,
  SecondaryButton,
  SuggestionList,
} from "./NotFound.styled";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();

  return (
    <Page role="main" aria-labelledby="notfound-title">
      <Card>
        <Left>
          <Title id="notfound-title">Ops! Página não encontrada</Title>
          <Subtitle>
            Parece que este filme saiu da tela — ou você se perdeu nos
            corredores do streaming. Talvez ele tenha ido tomar pipoca. 🍿
          </Subtitle>

          <SuggestionList>
            <li>Verifique se a URL está correta.</li>
            <li>Tente buscar o filme pela barra de pesquisa.</li>
            <li>Volte para a página inicial e explore outras recomendações.</li>
          </SuggestionList>

          <Actions>
            <PrimaryButton onClick={() => navigate("/")}>
              Voltar para a Home
            </PrimaryButton>
            <SecondaryButton onClick={() => navigate(-1)}>
              Voltar
            </SecondaryButton>
          </Actions>
        </Left>

        <Right>
          <SvgWrapper aria-hidden="true">
            <svg
              viewBox="0 0 640 480"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Ilustração de projetor triste"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#3b3b3d" />
                  <stop offset="1" stopColor="#2b2b2f" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#ffb86b" />
                  <stop offset="1" stopColor="#ffcc00" />
                </linearGradient>
              </defs>

              <rect
                x="0"
                y="0"
                width="640"
                height="480"
                rx="20"
                fill="transparent"
              />

              <g transform="translate(40,60)">
                <rect
                  x="0"
                  y="40"
                  width="330"
                  height="180"
                  rx="18"
                  fill="url(#g1)"
                />
                <circle
                  cx="270"
                  cy="130"
                  r="48"
                  fill="#0b1220"
                  stroke="#111827"
                  strokeWidth="6"
                />
                <circle cx="270" cy="130" r="32" fill="#0b2838" />
                <circle cx="270" cy="130" r="12" fill="#ffd966" />
                <path
                  d="M40 90 L80 70 L120 100 L160 80"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.95"
                />

                <g transform="translate(60,110)">
                  <ellipse cx="18" cy="18" rx="12" ry="10" fill="#111827" />
                  <ellipse cx="58" cy="18" rx="12" ry="10" fill="#111827" />
                  <path
                    d="M8 34 Q38 50 68 34"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <g transform="translate(300,80)">
                  <path
                    d="M0 40 L220 -40 L220 30 L0 120 Z"
                    fill="url(#g2)"
                    opacity="0.12"
                  />
                  <path
                    d="M0 40 L220 -40"
                    stroke="#ffd966"
                    strokeWidth="4"
                    strokeDasharray="6 6"
                    opacity="0.35"
                  />
                </g>
              </g>

              <g transform="translate(28,260)">
                <rect
                  x="0"
                  y="0"
                  rx="12"
                  width="460"
                  height="110"
                  fill="rgba(255,255,255,0.02)"
                />
                <text
                  x="18"
                  y="36"
                  fontSize="18"
                  fill="#cbd5e1"
                  fontFamily="Segoe UI, Roboto, Arial"
                >
                  404 · Página não encontrada
                </text>
                <text
                  x="18"
                  y="68"
                  fontSize="13"
                  fill="#94a3b8"
                  fontFamily="Segoe UI, Roboto, Arial"
                >
                  Talvez o endereço esteja errado ou o filme foi removido.
                </text>
              </g>
            </svg>
          </SvgWrapper>
        </Right>
      </Card>
    </Page>
  );
}
