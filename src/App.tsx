import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from '@mui/material/Grid2' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid container spacing={5}>

      {/* Indicadores */}
      <Grid>Elemento: Indicador 1</Grid>
      <Grid>Elemento: Indicador 2</Grid>
      <Grid>Elemento: Indicador 3</Grid>
      <Grid>Elemento: Indicador 4</Grid>
    
      {/* Tabla */}
      <Grid>Elemento: Tabla</Grid>
    
      {/* Gráfico */}
      <Grid>Elemento: Gráfico 1</Grid>

    </Grid>
  )
}

export default App
