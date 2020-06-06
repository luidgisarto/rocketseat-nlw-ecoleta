


<h1 align="center">
    <img alt="Ecoleta" src="./web/src/assets/logo.svg">
</h1>

<h4 align="center">
  ☕ Code and coffee
</h4>
<p align="center">
  <a href="#loudspeaker-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#video_camera-demonstração">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-execução-do-projeto">Execução do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>



## :loudspeaker: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Sqlite](https://www.sqlite.org/)

## 💻 Projeto

O **Ecoleta**, foi um projeto desenvolvido que permite o cadastro de entidades responsáveis pela **reciclagem de resíduos**, assim como a identificação de localização, e itens coletados pela mesma. Em sua versão mobile, permite a consulta desses pontos de coleta cadastrados anteriormente, e o contato através de whatsapp e e-mail com as respectivas entidades. 

Esse projeto foi promovido na **Trilha Booster** pela **Rocketseat** durante uma semana intensa de informação e código  sobre as tecnologias de pontas utilizadas atualmente em todo o mercado.

## :video_camera: Demonstração
![](./ecoleta.gif)


## :gear: Execução do Projeto
**Clonando o repositório:**

```bash 

git clone https://github.com/luidgisarto/rocketseat-nlw-ecoleta.git

```

**Configurações de Banco**
- Criação das tabelas no Sqlite
 ```bash 
	 cd server
	 npm run knex:migrate
```
- Carga inicial do banco com os itens de coleta
 ```bash 
	 cd server
	 npm run knex:seed
```


**Instalando as dependências**

 - Web
 ```bash 
	 cd web
	 npm install
```
 - Mobile
  ```bash 
	 cd mobile
	 npm install
	 npm install expo-cli -g
```
 - Server
  ```bash 
	 cd server
	 npm install
```

**Executando as aplicações**
 - Web
 ``` bash
	npm start
```
 - Mobile
 ``` bash
	 expo start
```
 - Server
 ``` bash
	npm run dev
```



## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Created by Luidgi Sarto
