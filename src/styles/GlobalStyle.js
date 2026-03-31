import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-0: #05040c;
    --bg-1: #07061a;
    --text: #ffffff;
    --text-dim: rgba(255, 255, 255, 0.78);
    --muted: rgba(255, 255, 255, 0.62);
    --surface: rgba(255, 255, 255, 0.055);
    --surface-2: rgba(255, 255, 255, 0.035);
    --border: rgba(255, 255, 255, 0.10);
    --border-strong: rgba(255, 255, 255, 0.16);
    --accent: #a855f7;
    --accent-2: #ec4899;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background:
      radial-gradient(1200px 800px at 20% -10%, rgba(168, 85, 247, 0.22), transparent 55%),
      radial-gradient(900px 700px at 110% 10%, rgba(236, 72, 153, 0.18), transparent 55%),
      radial-gradient(900px 700px at 60% 120%, rgba(99, 102, 241, 0.14), transparent 55%),
      linear-gradient(180deg, var(--bg-0), var(--bg-1));
    color: var(--text);
    overflow-x: hidden;
  }

  body::before,
  body::after {
    content: '';
    position: fixed;
    pointer-events: none;
    z-index: 0;
    border-radius: 999px;
    filter: blur(52px);
    opacity: 0.45;
  }

  /* Subtelne fioletowe koła pod sekcjami poniżej hero */
  body::before {
    width: min(42vw, 520px);
    height: min(42vw, 520px);
    left: -9vw;
    top: 56vh;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.32) 0%, rgba(168, 85, 247, 0.08) 45%, transparent 70%);
  }

  body::after {
    width: min(38vw, 460px);
    height: min(38vw, 460px);
    right: -8vw;
    top: 76vh;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.26) 0%, rgba(168, 85, 247, 0.10) 46%, transparent 72%);
  }

  #root {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle; 