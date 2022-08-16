import { AlertTriangleIcon, EditIcon, TrashIcon } from '@components/Icons'
import { Box, Modal, Pagination, TextField, ThemeProvider, Typography } from '@mui/material'
import { DataGrid, gridPageCountSelector, gridPageSelector, GridToolbarQuickFilter, useGridApiContext, useGridSelector, ptBR, GridActionsCellItem, GridRowParams} from '@mui/x-data-grid'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { Container, ModalExclude, PaginationTable } from '@styles/activity/tableData'
import { theme } from '@styles/globalStyle_MaterialUi'
import moment from 'moment' 
import Router from 'next/router'
import { Key, useContext, useEffect, useState } from 'react'
import { iDataActivity } from 'src/@types/pages'
import { ThemeContext } from 'styled-components'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import * as DateFnsPtBR from 'date-fns/locale'
import { DataContext } from '@store/GlobalState'
import { iUser } from 'src/@types/globalState'
import { api } from '@services/api'
import { format } from 'date-fns'
import { Button } from '@styles/buttons'

interface iTableData {
  dataAtivity?: iDataActivity[]
}

const TableData = ({ dataAtivity }: iTableData): JSX.Element => {

    // LOADING
    const [loading, setLoading] = useState<boolean>(false)

  // DATE USER
  const userDateGlobal: iUser | null = useContext(DataContext).userDateGlobal

  const themeContext = useContext(ThemeContext)
  
  const [dateInitial, setDateInitial] = useState<Date>(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const [dateFinal, setDateFinal] = useState<Date>(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0));
  
  // DATA TABLE
  const [tableDataActivity, setTableDataActivity] = useState<iDataActivity[] | undefined>()

  // CLOSE MODAL
  const [modalExcludeActivity, setModalExcludeActivity] = useState<boolean>(false);
  const [activityIdExclude, setActivityIdExclude] = useState<string>();

  // SEARCH TABLE
  function QuickSearchToolbar() {
    return (
      <Box sx={{ display: 'flex', gap: 1, paddingBottom: 2 }}>
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput: string) =>
            searchInput
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value !== '')
          }
          placeholder="Pesquisar..."
          variant="outlined"
          sx={{
            '&':{
              width: '100%',
              color: 'white'
            },
            '& .MuiInputBase-formControl':{ 
              color: 'white',
              borderColor: 'red'
            } 
          }} 
        />
        <LocalizationProvider adapterLocale={DateFnsPtBR.ptBR} dateAdapter={AdapterDateFns}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <MobileDatePicker
              label="Data inicial"
              value={dateInitial}
              onChange={(newValue) => {
                setDateInitial(newValue || dateInitial);
                setDateFinal(new Date(dateInitial.getFullYear(), dateInitial.getMonth() + 2, 0))
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              label="Data final"
              value={dateFinal}
              onChange={(newValue) => {
                setDateFinal(newValue || dateFinal);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        </LocalizationProvider>
      </Box>
    );
  }

  // CUSTOM FOOTER
  function CustomFooter() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    
    return ( 
      <PaginationTable>
          <Pagination
            color="primary"
            count={pageCount}
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
            /* STYLED */
            sx={{
              '& .MuiPaginationItem-text': {
                color: themeContext.pallete.text.primary, 
              },
            }}
          />
        </PaginationTable>
    )
  }
  
  // DATA ACTIVITY
  const data = tableDataActivity?.map( (ativity) => {
    return({
      id: ativity.id,
      exercise: ativity.exercise,
      date: moment(ativity.date).format("DD/MM/YYYY"),
      weight: ativity.weight,
      createAt: moment(ativity.createAt).format("DD/MM/YYYY"),
      repetitions: ativity.repetitions.toString().replace(/,/g,', '),
      interval: ativity.interval + 's',
      muscle: ativity.muscle,
      series: ativity.series
    })
  }) ||  []

  // COLUMNS TABLE
  const columns = [
    { field: 'exercise', headerName: 'Exercício', width: 290, },
    { field: 'date', headerName: 'Data', width: 110, },
    { field: 'muscle', headerName: 'Musculo', type: 'number', width: 110, },
    { field: 'weight', headerName: 'Peso', type: 'number', width: 110, },
    { field: 'repetitions', headerName: 'Repetições', type: 'number', width: 110, },
    { field: 'interval', headerName: 'Intervalo', type: 'number', width: 110, },
    { field: 'series', headerName: 'Series', type: 'number', width: 110, }, 
    {
      field: 'actions',
      type: 'actions',
      width: 150,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem 
          icon={<TrashIcon />} 
          onClick={()=>{
            setModalExcludeActivity(!modalExcludeActivity)
            setActivityIdExclude(params.row.id)
          }} 
          label="Delete" 
          // @ts-ignore-start
          key={()=>Math.random()}
          // @ts-ignore-end
        />,
        <GridActionsCellItem 
          icon={<EditIcon />} 
          onClick={()=>Router.push(`/activity/training/${params.row.id}`)} 
          label="Delete" 
          // @ts-ignore-start
          key={()=>Math.random()}
          // @ts-ignore-end
        />
        ,
      ]
    }
  ]
  
  // DELETE ACTIVITY
  
  function deleteActivity(){ 
    api.delete(`/trainings/${activityIdExclude}`)
    setModalExcludeActivity(!modalExcludeActivity)
  }

  useEffect(()=>{
    // LOADING
    setLoading(true)
    
    // TABLE DATA ACTIVITY
    const fetchData = async () => {
        await api.get(`trainings/user/${userDateGlobal?.id || ''}/date/${format(dateInitial, 'dd-MM-yyyy')}/${format(dateFinal, 'dd-MM-yyyy')}`).then(
            ({data})=>{
                setLoading(false)
                setTableDataActivity(data)
            }
            ).catch( ({response: {data}})=> {
                setLoading(false) 
        }) 
    }

    if(userDateGlobal){
        fetchData()
    } 

}, [userDateGlobal, setLoading, dateInitial , dateFinal])

    return(
  
      <ThemeProvider theme={theme}>
      {/* MODAL DELETE ACTIVITY */}
      <Modal open={modalExcludeActivity} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ModalExclude>
          <AlertTriangleIcon/>

          <Typography variant="h6" component="h2">Deseja mesmo excluir a atividade?</Typography>

          <span>
            <Button color="info" variant="contained" onClick={()=>setModalExcludeActivity(!modalExcludeActivity)}>Cancelar</Button>

            <Button color="error" variant="outlined" onClick={()=>deleteActivity()}>Excluir</Button>
          </span>
        </ModalExclude>
      </Modal>

        <Container>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            components={{Toolbar: QuickSearchToolbar, Footer: CustomFooter}}
            
            /* STYLED */
            sx={{
              '&': {
                border: `none`
              },
              '& .MuiDataGrid-columnHeaders': {
                background: themeContext.pallete.grey.A100,
                color: themeContext.pallete.background.default
              }, 
              '& .MuiIconButton-root': { 
                color: themeContext.pallete.background.default
              }, 
              '& .MuiDataGrid-iconSeparator': { 
                color: themeContext.pallete.background.default
              }, 
              '& .MuiDataGrid-cellContent': {
                color: themeContext.pallete.text.primary,
              },
              '& .MuiDataGrid-cell': {
                borderBottom: `1px solid ${themeContext.pallete.grey.A300}`
              },
              '& .MuiDataGrid-virtualScrollerContent': {
                background: themeContext.pallete.background.default
              },
              '& .MuiDataGrid-main': {
                borderRight: `1px solid ${themeContext.pallete.grey.A300}`,
                borderLeft: `1px solid ${themeContext.pallete.grey.A300}`
              },
              '& .tableData__PaginationTable-sc-kpar5i-1': {
                borderRight: `1px solid ${themeContext.pallete.grey.A300}`,
                borderLeft: `1px solid ${themeContext.pallete.grey.A300}`,
                borderBottom: `1px solid ${themeContext.pallete.grey.A300}`
              }
            }}
          />  
        </Container>
      </ThemeProvider> 
    )
}

export default TableData