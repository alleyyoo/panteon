import { PanteonNavbar } from '../../components/Navbar/PanteonNavbar';
import { PanteonDatatable } from '../../components/Datatable/PanteonDatatable';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';
import { playerListThunk } from '../../store/player/player';
import { Button, Input } from 'antd';
import { PanteonDashboardPageStyles } from './PanteonDashboardPage.styles';

export const PanteonDashboardPage = () => {
  const classes = PanteonDashboardPageStyles();
  const player = useAppSelector((state) => state.player);
  const [playerSearch, setPlayerSearch] = useState<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(playerListThunk());
  }, []);

  return (
    <div>
      <PanteonNavbar />
      <div className={classes.input}>
        <Input
          value={playerSearch}
          onChange={(event) => setPlayerSearch(event.target.value)}
          placeholder='Search Player...'
        />
        <Button
          type='primary'
          onClick={() => dispatch(playerListThunk(playerSearch))}>
          Search
        </Button>
      </div>
      <PanteonDatatable
        columns={[
          {
            key: 'rank',
            dataIndex: 'rank',
            title: 'Rank',
            responsive: ['xs'],
            render: (text: string) => text
          },
          {
            key: 'id',
            dataIndex: 'id',
            title: 'ID',
            responsive: ['md'],
            render: (text: string) => text
          },
          {
            key: 'username',
            dataIndex: 'username',
            title: 'Username',
            responsive: ['xs'],
            render: (text: string) => text
          },
          {
            key: 'country',
            dataIndex: 'country',
            title: 'Country',
            responsive: ['md'],
            render: (text: string) => text
          },
          {
            key: 'score',
            dataIndex: 'score',
            title: 'Score',
            responsive: ['md'],
            render: (text: number) => text
          }
        ]}
        dataSource={player.data?.players.concat(player.data?.otherPlayers)}
      />
    </div>
  );
};
