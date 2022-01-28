import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useEffect, useState } from  'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';


function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
        ${Tag} {
            color:${appConfig.theme.colors.primary[300]};
            font-size: 24px;
            font-weight: 600;
        }
        `}</style>
        </>
    );
}

export default function PaginaInicial() {
    //const username = 'midiantossani';
    const [username, setUsername] = React.useState('midiantossani');
    const [local, setLocal] = useState();
    const roteamento = useRouter();
    const image = ''
    useEffect(() => {
          fetch(`https://api.github.com/users/${username}`)
          .then((resposta) => resposta.json())
          .then(function 
            (RespostaCompleta) {
            const local = RespostaCompleta.location
            setLocal(local)
          })
    })


    return (
      <>
      {/*Box*/}
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[800],
            backgroundImage: 'url(https://images.unsplash.com/photo-1583119912267-cc97c911e416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundPosition: 'center',
          }}
        >
          {/*box-center*/}
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '20px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[800],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                console.log('Alguém submeteu o form');
                roteamento.push(`/chat?username=${username}`);
                //window.location.href = '/chat';
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Boas vindas de volta!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.primary[500] }}>
                {appConfig.name}
              </Text>
              
              {/*<input 
                type="text"
                value={username}
                onChange={function (event) {
                  //onde está o valor?
                  const valor = event.target.value;
                  //Trocar o valor da variável
                  //Através do React e avisa quem precisa
                  setUsername(valor);
                }}
              />*/}
            <TextField
            placeholder="Digite o usuário"
             value={username}
                onChange={function (event) {
                  console.log('usuário digitou', event.target.value);
                  //onde está o valor?
                  const valor = event.target.value;
                  //Trocar o valor da variável
                  //Através do React e avisa quem precisa
                  setUsername(valor);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals['050'],
                    mainColor: appConfig.theme.colors.neutrals[700],
                    mainColorHighlight: appConfig.theme.colors.primary[800],
                    backgroundColor: appConfig.theme.colors.neutrals[999],
                  },
                }}
              />

              {username.length < 2
                ? <span>Preencha o campo com um usuário válido!</span>
                : ''}
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["100"],
                  mainColor: appConfig.theme.colors.primary[700],
                  mainColorLight: appConfig.theme.colors.primary[500],
                  mainColorStrong: appConfig.theme.colors.primary[800],
                }}
              />
            </Box>
            {/* Fim-Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[999],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={
                  username.length >= 2
                   ? `https://github.com/${username}.png`
                   :  Image
                  }
                  
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.primary[700],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username.length > 2 ? username : ""}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }

//Componente React

/*function HomePage() {
    return (
    <div>
        
        <GlobalStyles /> 
        <titulo tag="h2">Boas vindas de volta!</titulo>
        <h2>Discord - Alura Matrix</h2>
       
    </div>
    )
  }
  
  export default HomePage
  */