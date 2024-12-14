import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        minHeight: '90vh',
        background: 'linear-gradient(135deg, #f4f6f8, #ffffff)',
        padding: 4,
        color: '#2c3e50',
        marginTop: '20px',
      }}
    >
      {/* Coluna direita com os cartões */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
        {/* Card para Clientes */}
        <Paper
          sx={{
            width: '100%',
            padding: 3,
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/clientes"
            sx={{
              textTransform: 'none',
              fontSize: '16px',
              padding: '12px 24px',
              marginBottom: 2,
              borderRadius: '50px',
              backgroundColor: '#3498db',
              '&:hover': { backgroundColor: '#2980b9' },
            }}
          >
            <HomeIcon sx={{ marginRight: 1, fontSize: 28 }} />
            Clientes
          </Button>
          <Typography variant="body1" sx={{ color: '#7f8c8d', fontSize: '14px' }}>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Listar todos os clientes cadastrados</li>
              <li>Buscar clientes pelo nome</li>
              <li>Adicionar novos clientes (formulário com validação)</li>
            </ul>
          </Typography>
        </Paper>

        {/* Card para Produtos */}
        <Paper
          sx={{
            width: '100%',
            padding: 3,
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/produtos"
            sx={{
              textTransform: 'none',
              fontSize: '16px',
              padding: '12px 24px',
              marginBottom: 2,
              borderRadius: '50px',
              backgroundColor: '#006400',
              '&:hover': { backgroundColor: '#004d00' },
            }}
          >
            <HomeIcon sx={{ marginRight: 1, fontSize: 28 }} />
            Produtos
          </Button>
          <Typography variant="body1" sx={{ color: '#7f8c8d', fontSize: '14px' }}>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Listar todos os produtos cadastrados</li>
              <li>Buscar produtos pelo nome</li>
              <li>Adicionar novos produtos (formulário com validação)</li>
            </ul>
          </Typography>
        </Paper>

        {/* Card para Pedidos */}
        <Paper
          sx={{
            width: '100%',
            padding: 3,
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/pedidos"
            sx={{
              textTransform: 'none',
              fontSize: '16px',
              padding: '12px 24px',
              marginBottom: 2,
              borderRadius: '50px',
              backgroundColor: '#e74c3c',
              '&:hover': { backgroundColor: '#c0392b' },
            }}
          >
            <HomeIcon sx={{ marginRight: 1, fontSize: 28 }} />
            Pedidos
          </Button>
          <Typography variant="body1" sx={{ color: '#7f8c8d', fontSize: '14px' }}>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Listar todos os pedidos</li>
              <li>Buscar pedidos por cliente ou produto</li>
              <li>Adicionar novos pedidos, selecionando cliente e produtos em menus suspensos</li>
            </ul>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
