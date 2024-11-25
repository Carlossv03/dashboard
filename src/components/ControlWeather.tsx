 {/* Componentes MUI */}

 import Paper from '@mui/material/Paper';
 import Typography from '@mui/material/Typography';
 import Box from '@mui/material/Box';
 import InputLabel from '@mui/material/InputLabel';
 import MenuItem from '@mui/material/MenuItem';
 import FormControl from '@mui/material/FormControl';
 import Select from '@mui/material/Select';


 export default function ControlWeather() {

    {/* Arreglo de objetos */}
    let items = [
        {"name":"Precipitación", "description":"Cantidad de agua que cae sobre una superficie en un período específico."}, 
        {"name": "Humedad", "description":"Cantidad de vapor de agua presente en el aire, generalmente expresada como un porcentaje."}, 
        {"name":"Nubosidad", "description":"Grado de cobertura del cielo por nubes, afectando la visibilidad y la cantidad de luz solar recibida."}
    ]

    {/* Arreglo de elementos JSX */}
    let options = items.map( (item, key) => <MenuItem key={key} value={key}>{item["name"]}</MenuItem> )
       
    {/* JSX */}
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}
        >

            <Typography mb={2} component="h3" variant="h6" color="primary">
                Variables Meteorológicas
            </Typography>

            <Box sx={{ minWidth: 120 }}>
                   
                <FormControl fullWidth>
                    <InputLabel id="simple-select-label">Variables</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="simple-select"
                        label="Variables"
                        defaultValue='-1'
                    >
                        <MenuItem key="-1" value="-1" disabled>Seleccione una variable</MenuItem>

                        {options}

                    </Select>
                </FormControl>

            </Box>


        </Paper>


    )
}