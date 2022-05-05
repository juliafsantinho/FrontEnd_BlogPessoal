import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado!")
          history("/login")
  
      }
  }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' >Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo' >Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao' >Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://i.imgur.com/Y1TxghI.png" alt="" width="900px" height="600px" className="imagem01"/>
                </Grid>
                <Grid xs={12} className="imagem01">
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;