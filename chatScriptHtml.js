  // chatScript.js
  const chatbotId = '95ffd368931ca09bb4e0d90ed679bbdb';
  const yourEndpoint = 'https://app.genniuschat.com/bots/chat/89953cd2-f886-465c-98a9-c68dcaf46a56';

  // Adiciona o estilo diretamente ao cabeçalho
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
  #iframeBotGennius {
    width: 26rem;
    height: 80vh;
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    z-index: 1010;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    display: none;
  }

  @media (max-width: 450px) {
    #iframeBotGennius {
      width: 100%;
      height: 100%;
      bottom: 0;
      right: 0;
      z-index: 1040;
      border-radius: 0;
      box-shadow: none;
    }
  }
`;
  document.head.appendChild(styleElement);

  document.getElementById('iframeBotGennius').src = yourEndpoint;

  function toggleIframe() {
    var iframe = document.getElementById('iframeBotGennius');
    var button = document.getElementById('chatButton');
    var buttonContainer = document.getElementById('iframeButtonBotGennius');

    if (iframe.style.display === 'none' || iframe.style.display === '') {
      iframe.style.display = 'block';
      button.style.display = 'block';
      button.src = 'https://i.ibb.co/qkxJ9PY/CHAT-ABERTO.png';

      // Verifica a largura da tela
      var windowWidth = window.innerWidth;

      // Se a largura da tela for menor que 450 pixels, ajuste a posição do buttonContainer
      if (windowWidth < 450) {
        button.src = 'https://i.ibb.co/NS4DSH8/CHAT-ABERTO-MOBILE.png';
        buttonContainer.style.top = '1rem';
      } else {
        buttonContainer.style.bottom = '1rem';
      }
    } else {
      iframe.style.display = 'none';
      button.style.display = 'block';
      buttonContainer.style.bottom = '1rem';
      buttonContainer.style.top = '';
      button.src = 'https://i.ibb.co/N3pnhTs/CHAT-FECHADO.png';
    }
  }
