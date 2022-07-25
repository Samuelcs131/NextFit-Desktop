import { Pagination, styled } from '@mui/material'
import { DataGrid, GridColDef, gridPageCountSelector, gridPageSelector, GridToolbarQuickFilter, useGridApiContext, useGridSelector, ptBR} from '@mui/x-data-grid'
import { Container, PaginationTable } from '@styles/activity/tableData'
import moment from 'moment'
import { iDataActivity } from 'src/@types/pages'
 

interface iTableData {
  dataAtivity?: iDataActivity[]
}

const TableData = ({ dataAtivity }: iTableData): JSX.Element => {

  // SEARCH TABLE
  function QuickSearchToolbar() {
    return ( 
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput: string) =>
            searchInput
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value !== '')
          }
          placeholder="Pesquisar..."
        /> 
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
          />
        </PaginationTable>
    )
  }

  // DATA ACTIVITY
  const data = dataAtivity?.map( (ativity) => {
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
  const columns: GridColDef[] = [
    { field: 'exercise', headerName: 'Exercício', width: 290, },
    { field: 'date', headerName: 'Data', width: 110, },
    { field: 'muscle', headerName: 'Musculo', type: 'number', width: 110, },
    { field: 'weight', headerName: 'Peso', type: 'number', width: 110, },
    { field: 'repetitions', headerName: 'Repetições', type: 'number', width: 110, },
    { field: 'interval', headerName: 'Intervalo', type: 'number', width: 110, },
    { field: 'series', headerName: 'Series', type: 'number', width: 110, },
  ]

  // CUSTOM 
  const CustomizedTable = styled(DataGrid)`
 
  `
 

    return(
      <Container>
        <CustomizedTable 
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          components={{Toolbar: QuickSearchToolbar, Footer: CustomFooter}}
        />
      </Container>
    )
}

export default TableData