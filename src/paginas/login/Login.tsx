import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, {ChangeEvent, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import'./Login.css';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';


function Login() {
    // Redireciona o usuário para determinada pagina
    let history = useNavigate();
    // Hooks que vão manipular o nosso Local Storage para gravar o Token
    const[token, setToken] = useLocalStorage('token');
    // useState define como uma determinada variavel será inicializada quando o Comp. for renderizado
    const[userLogin, setUserLogin] = useState<UserLogin> (
        {
            id:0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""

        }
    )
    // Função que junto com a setUserLogin irá atualizar o valor inicial da userLogin
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
     // Hook de efeito colateral, sempre executa uma função quando o que estiver no seu Array é alterado
        useEffect(() => {
            if (token != ''){
                history('/posts')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try{
            await login (`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        } catch(error){
            alert('Dados dos usuário inconsistentes. Erro ao logar!')
        }
        
    }
    
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs = {6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                           
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>

            <Grid xs = {6} className='imagem'>

            </Grid>
        </Grid>


    )
}

export default Login;