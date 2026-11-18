Questão 05 — Simulador Bancário
Descrição
Aplicativo demonstrativo desenvolvido com React Native e Expo para simular operações de depósito e saque em uma conta com saldo inicial de R$ 1.000,00. O aplicativo não movimenta dinheiro real.
Funcionalidades
- Apresentar o saldo inicial de R$ 1.000,00.
- Informar o valor de uma operação.
- Realizar depósitos e atualizar o saldo.
- Realizar saques e atualizar o saldo.
- Impedir saques superiores ao saldo disponível.
- Rejeitar valores vazios, inválidos, iguais a zero ou negativos.
- Exibir mensagens sobre o resultado das operações.
Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- useState para armazenar e atualizar o saldo.
Exemplo de utilização
1. Saldo inicial: R$ 1.000,00.
2. Depósito: R$ 200,00.
3. Saque: R$ 150,00.
4. Saldo final esperado: R$ 1.050,00.
Como executar
1. Abra o terminal na pasta deste projeto.
2. Instale as dependências, se necessário: npm.cmd install.
3. Inicie o projeto para navegador: npx.cmd expo start --web.
4. Abra no navegador o endereço apresentado pelo Expo.
No PowerShell do Windows, use os comandos com .cmd caso npm ou npx sejam bloqueados pela política de execução de scripts.

Observação
Este aplicativo é apenas uma simulação acadêmica. Os dados são mantidos no estado do aplicativo durante a execução e não representam uma conta bancária real.