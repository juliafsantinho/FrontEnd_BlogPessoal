import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
            Venho de Bauru/SP(A CIDADE DO LANCHE), tenho 24 anos, vivo em união estável. Iniciei minha vida profissional aos 14 anos como aprendiz em uma rede de Supermercados, onde consegui direcionamento para a área administrativa, já trabalhei na área de Marketing, com SAC, fui recepcionista de clinica de psicologia, trabalhei com documentação de veículos e até dentro de uma camara fria a -3° como digitadora. 
            Sou nova, mas com toda essa bagagem posso dizer que adquiri muitas habilidades e competências, como Mentalidade de Crescimento, Persistência e Responsabilidade Pessoal.

            Iniciei o ensino superior na UNIP cursando Biomedicína, tranquei com 1 ano e meio, pois não era o que eu queria, não estava feliz. Como gostava de algo movido mais para a prática eu reiniciei meus estudos na FATEC, lá cursei Sistemas Biomédicos até o 5º semestre, porém também tranquei o curso, mas não foi por falta de persistência e sim por ter me despertado o interesse em Desenvolvimento de Sistemas, pelo próprio curso que tinha umas matérias relacionais. E por ter passado por duas graduações, mesmo que incompletas, já trabalhei com muitos grupos e adquiri a habilidade de trabalhar em equipe.

            Atualmente eu faço parte do bootcamp de Java Fullstack da Generation Brasil, onde iniciei querendo me encontrar na área de desenvolvimento e para ter certeza se é o que eu quero. No bootcamp tive a oportunidade de me desenvolver ainda mais profissionalmente realizando projetos em equipe e aprendendo e colocando em prática habilidades e mentalidades. Anteriormente já havia feito alguns cursos para entender um pouco sobre a lógica de programação e acabei adquirindo um certo conhecimento em JavaScript, HTML e CSS. Hoje com o bootcamp tenho conhecimente em muitas outras coisas, como JAVA, MySQL e Spring Boot. Minha parte back já considero bem avançada para quem começou sabendo somente a lógica.
            E para finalizar, agora posso dizer que estou no caminho certo e já estou me preparando para iniciar a graduação de ADS no meio desse ano.
    </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;