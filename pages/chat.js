import { Box, Text, TextField, Image, Button, Icon } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { createClient } from '@supabase/supabase-js'

const SupaBase_Anon_Key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5MzkyNywiZXhwIjoxOTU4ODY5OTI3fQ.h1ENwYzopL2KbnolZRFEIBSxjnG8k8-v4QaPylHXMH8';
const SupaBase_URL = 'https://krkkjzxiygjowwpzjetq.supabase.co';
const SupaBaseClient = createClient(SupaBase_URL, SupaBase_Anon_Key);

const dadosDoSupabase = SupaBaseClient
.from('mensagens')
.select('*')
.then((dados) => {
    console.log('dados da consulta', dados);
})



export default function ChatPage() {
  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]); //array vazia
  // Usuário
  // - Usuário digita no campo textarea
  // -Aperta enter para enviar
  // - Tem que adicionanr o texto na listagem

  // .Dev
  // - [X] campo criado
  // - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter para limpar a variavel)
  // - [] Lista de mensagens

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagens.length + 1,
      de: "midiantossani",
      texto: novaMensagem,
    };
    // chamada de um back-end
    setListaDeMensagens([
        mensagem, 
        ...listaDeMensagens,
    ]);
    setMensagem("");
  }
    function handleRemoveMessage(id) {
        const filteredList = listaDeMensagens.filter((mensagem) => mensagem.id !== id);
        setListaDeMensagens(filteredList);
    }


  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens} handleRemoveMessage={handleRemoveMessage} />
          {/*{listaDeMensagens.map((mensagemAtual) => {
                       return(
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de} : {mensagemAtual.texto}
                            </li>
                       )
                   })}*/}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
            styleSheet={{
                padding:"20px",
                borderRadius: "20px",
                marginBottom: "10px",
                color: appConfig.theme.colors.neutrals[100],
               backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
               
               onClick={(event) => {
                handleNovaMensagem(mensagem);
               }} 

               //onClick={() => handleRemoveMessage(mensagem.id)}
                >OK
               <Icon label= "Icon component" name="FaTimes" />
               </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  console.log("MessageList", props);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/midiantossani.png`}
              />
              <Text tag="strong">{mensagem.de}</Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
