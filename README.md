# Gerenciador de Senhas

Um aplicativo móvel desenvolvido em **React Native** usando **Expo**, que permite aos usuários salvar, visualizar e gerenciar senhas de forma segura localmente no dispositivo.

## 🚀 Funcionalidades

- **Cadastro e Login:** Tela de boas-vindas com fluxo de autenticação simples.
- **Salvar Senhas:** Armazene suas senhas de forma segura usando `AsyncStorage`.
- **Gerenciar Senhas:** Visualize e exclua senhas salvas facilmente.
- **Navegação:** Interface amigável com `Tab Navigator` e `Stack Navigator` para uma melhor experiência do usuário.
- **Persistência de Dados:** As senhas permanecem salvas mesmo após fechar o app (sem uso de banco de dados externo).

## 📱 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [@react-navigation/native](https://reactnavigation.org/)
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
- [Ionicons](https://ionic.io/ionicons) para ícones

## ⚙️ Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. **Execute o aplicativo:**
   ```bash
   npx expo start
   ```

4. **Abra no seu dispositivo:**
   - Com o Expo Go (iOS/Android), escaneie o QR Code gerado.
   - Ou execute em um emulador Android/iOS configurado.

## 🗂️ Estrutura de Pastas

```
├── App.js
├── src
│   ├── Pages
│   │   ├── Welcome
│   │   ├── Login
│   │   ├── Home
│   │   └── Senhas
│   ├── Routes
│   │   ├── routes.js
│   │   └── routesTab.js
│   └── hooks
│       └── useStorage.js
└── package.json
```

## ❗ Possíveis Problemas

- **Dados não persistindo após reiniciar o app:**
  - Verifique se não há comandos como `AsyncStorage.clear()` no código.
  - Evite usar `expo start -c` com frequência, pois limpa o cache do app.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

---

Desenvolvido com 💙 usando React Native e Expo.

