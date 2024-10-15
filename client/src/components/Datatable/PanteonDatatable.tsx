import { Table } from 'antd';
import { PanteonDatatableStyles } from './PanteonDatatable.styles';
import { PanteonDatatableProps } from './PanteonDatatable.props';

export const PanteonDatatable = (props: PanteonDatatableProps) => {
  const classes = PanteonDatatableStyles();
  const { columns, dataSource, ...rest } = props;
  return (
    <Table
      className={classes.root}
      columns={columns}
      dataSource={dataSource}
      {...rest}
      bordered
      pagination={false}
      tableLayout='fixed'
    />
  );
};
