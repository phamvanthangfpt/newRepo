import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';

function RecentOrders({ list }) {
  console.log("list", list);
  return (
    <Card>
      <RecentOrdersTable cryptoOrders={list} />
    </Card>
  );
}

export default RecentOrders;
