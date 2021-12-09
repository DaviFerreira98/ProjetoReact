import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../service/Service';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function DeletarPostagem() {
  let history = useHistory()
  const { id } = useParams<{id: string}>();
  const [token, setToken] = useLocalStorage('token');
  const [post,setPost] = useState<Postagem>()

  useEffect(()=>{
      if(token == ""){
          alert("Voce precisa estar logado")
          history.push("/login")
      }
  }, [token])

  useEffect(()=>{
      if(id !== undefined){
          findById(id)
      }
  },[id])
  
  async function findById(id: string){
      buscaId('/postagens/${id)', setPost,{
      headers: {
          'Authorization' : token
          }
      })
  }
  function sim(){
    history.push('/post')
    deleteId('/postagens/${id}',{
      headers: {
        'Authorization' : token
      }
    });
    alert("POstagem deletada com sucesso");
  }
  function nao(){
    history.push('/post')
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim}  variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;