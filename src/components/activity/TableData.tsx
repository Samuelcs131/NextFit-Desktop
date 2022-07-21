import { Container } from '@styles/activity/tableData'
import moment from 'moment'
import { useState } from 'react'
import { Table, Column, HeaderCell, Cell,  } from 'rsuite-table'
import Pagination from 'rsuite/Pagination'
import { iDataActivity } from 'src/@types/pages'
 
interface iTableData {
  dataAtivity?: iDataActivity[]
}

const TableData = ({ dataAtivity }: iTableData): JSX.Element => {

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
    })

    // PAGINATION
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(1);
    const [page, setPage] = useState(1);

    const handleChangeLimit = (dataKey: any) => {
      setPage(1);
      setLimit(dataKey);
    };

    return(
    <Container>
      <Table height={420} data={data || undefined}  >
        <Column width={120}>
          <HeaderCell>Data</HeaderCell>
          <Cell dataKey="date" />
        </Column>

        <Column width={300} resizable>
          <HeaderCell>Exercício</HeaderCell>
          <Cell dataKey="exercise" />
        </Column>

        <Column width={100}>
          <HeaderCell>Musculo</HeaderCell>
          <Cell dataKey="muscle" />
        </Column>

        <Column width={100}>
          <HeaderCell>Intervalo</HeaderCell>
          <Cell dataKey="interval" />
        </Column>

        <Column width={70}>
          <HeaderCell>Peso</HeaderCell>
          <Cell dataKey="weight" />
        </Column>
        
        <Column width={70}>
          <HeaderCell>Series</HeaderCell>
          <Cell dataKey="series" />
        </Column>
        
        <Column flexGrow={1}>
          <HeaderCell>Repetições</HeaderCell>
          <Cell dataKey="repetitions" />
        </Column>
      </Table>
    </Container>
    )
}

export default TableData