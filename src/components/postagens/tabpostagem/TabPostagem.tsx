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
      <Typography variant="body1" gutterBottom color="textPrimary" align="justify" >
      Natural de Agudos/SP, tenho 24 anos, vivo em união estável. Iniciei minha vida profissional aos 14 anos como aprendiz em uma rede de Supermercados, onde consegui um direcionamento para a área administrativa, com isso posso dizer que adquiri muitas habilidades e competências, como a Responsabilidade Pessoal. Iniciei meus estudos na FATEC Bauru, cursei até o 5º semestre do curso de Sistemas Biomédicos, não dei continuidade no curso por ter me despertado o interesse em Desenvolvimento, através do próprio curso que continha matérias relacionais. Com essa experiência posso dizer que já trabalhei com muitos grupos e adquiri a habilidade de trabalhar em equipe. Por fim, atualmente estou finalizando o bootcamp de Java Fullstack da Generation Brasil, área que estou me aprofundando e aperfeiçoando para em breve iniciar uma nova graduação na área.
      </Typography>
        </TabPanel>
      </TabContext>
      
    </>
  );
}
export default TabPostagem;