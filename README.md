# My Loot 💰

[![React Native](https://img.shields.io/badge/React%20Native-0.72-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-49-black.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

[🇺🇸 English](#english) | [🇧🇷 Português](#português)

---

## English

### 📱 About

My Loot is a personal finance control mobile application developed in React Native with Expo Router and TypeScript. It helps users manage their income and expenses with an intuitive and modern interface.

### ✨ Features

- 🔐 **User registration and authentication**
- 💰 **View balance and financial transactions**
- ➕ **Register new incomes and expenses**
- 📅 **Filter transactions by date (with calendar)**
- 📱 **Drawer navigation (side menu)**
- 🔒 **Secure logout and redirect to login screen**

### 🛠️ Technologies Used

- [React Native](https://reactnative.dev/) - Mobile app framework
- [Expo Router](https://expo.github.io/router/docs) - File-based routing
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Axios](https://axios-http.com/) - HTTP requests
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Local storage
- [react-native-calendars](https://github.com/wix/react-native-calendars) - Calendar component
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - Icon library
- [styled-components](https://styled-components.com/) - CSS-in-JS styling

### 📁 Project Structure

```
apps/my-loot/
├── app/
│   ├── index.tsx                # Login screen (SignIn)
│   └── (drawer)/
│       ├── index.tsx            # Main screen (Home)
│       ├── newRegister.tsx      # New register screen
│       └── profilePage.tsx      # Profile screen
├── components/
│   ├── CalendarModal/
│   ├── Moviments.tsx
│   ├── BalanceCard.tsx
│   └── ...
├── src/
│   ├── context/
│   │   └── auth.tsx             # Auth context
│   └── services/
│       └── api.tsx              # Axios configuration
├── package.json
└── README.md
```

### 🚀 Getting Started

#### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android) or Xcode (for iOS)

#### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd apps/my-loot
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure the API address:**

   Go to the file `src/services/api.tsx` and change the `baseURL` to your backend IP address:

   ```typescript
   const api = axios.create({
     baseURL: "http://YOUR_IP_HERE:3333",
   });
   ```

4. **Start the backend server:**

   ```bash
   cd ../../backend-financas
   yarn install  # if needed
   yarn dev
   ```

5. **Start the mobile app:**

   ```bash
   cd ../apps/my-loot
   npx expo start
   ```

6. **Open the app:**
   - Use the Expo Go app on your device
   - Or use an Android/iOS emulator

#### 📝 Important Notes

- Make sure the IP configured in `api.tsx` is accessible from your device/emulator
- Ensure the backend server is running before starting the mobile app
- For Android emulator, use `10.0.2.2` instead of `localhost`
- For iOS simulator, you can use `localhost`

### 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 👨‍💻 Author

Made with ❤️ by [Your Name](https://github.com/yourusername)

---

## Português

### 📱 Sobre

My Loot é um aplicativo mobile de controle de finanças pessoais desenvolvido em React Native com Expo Router e TypeScript. Ele ajuda os usuários a gerenciar suas receitas e despesas com uma interface intuitiva e moderna.

### ✨ Funcionalidades

- 🔐 **Cadastro e autenticação de usuários**
- 💰 **Visualizar saldo e transações financeiras**
- ➕ **Registrar novas receitas e despesas**
- 📅 **Filtrar transações por data (com calendário)**
- 📱 **Navegação por drawer (menu lateral)**
- 🔒 **Logout seguro e redirecionamento para tela de login**

### 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) - Framework para apps mobile
- [Expo Router](https://expo.github.io/router/docs) - Roteamento baseado em arquivos
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Axios](https://axios-http.com/) - Requisições HTTP
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Armazenamento local
- [react-native-calendars](https://github.com/wix/react-native-calendars) - Componente de calendário
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - Biblioteca de ícones
- [styled-components](https://styled-components.com/) - Estilização CSS-in-JS

### 📁 Estrutura do Projeto

```
apps/my-loot/
├── app/
│   ├── index.tsx                # Tela de login (SignIn)
│   └── (drawer)/
│       ├── index.tsx            # Tela principal (Home)
│       ├── newRegister.tsx      # Tela de novo registro
│       └── profilePage.tsx      # Tela de perfil
├── components/
│   ├── CalendarModal/
│   ├── Moviments.tsx
│   ├── BalanceCard.tsx
│   └── ...
├── src/
│   ├── context/
│   │   └── auth.tsx             # Context de autenticação
│   └── services/
│       └── api.tsx              # Configuração do Axios
├── package.json
└── README.md
```

### 🚀 Como Executar

#### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Expo CLI
- Android Studio (para Android) ou Xcode (para iOS)

#### Instalação

1. **Clone o repositório:**

   ```bash
   git clone <repository-url>
   cd apps/my-loot
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure o endereço da API:**

   Vá para o arquivo `src/services/api.tsx` e altere a `baseURL` para o IP do seu backend:

   ```typescript
   const api = axios.create({
     baseURL: "http://SEU_IP_AQUI:3333",
   });
   ```

4. **Inicie o servidor backend:**

   ```bash
   cd ../../backend-financas
   yarn install  # se necessário
   yarn dev
   ```

5. **Inicie o aplicativo mobile:**

   ```bash
   cd ../apps/my-loot
   npx expo start
   ```

6. **Abra o aplicativo:**
   - Use o app Expo Go no seu dispositivo
   - Ou use um emulador Android/iOS

#### 📝 Observações Importantes

- Certifique-se de que o IP configurado em `api.tsx` é acessível do seu dispositivo/emulador
- Garanta que o servidor backend esteja rodando antes de iniciar o app mobile
- Para emulador Android, use `10.0.2.2` em vez de `localhost`
- Para simulador iOS, você pode usar `localhost`

### 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

### 👨‍💻 Autor

Feito com ❤️ por [Seu Nome](https://github.com/seuusuario)
