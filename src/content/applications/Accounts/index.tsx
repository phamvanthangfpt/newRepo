import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import RecentOrders from './RecentOrders';
import { useCallback, useEffect, useState } from 'react';
import { axiosHandler } from 'src/services/httpClient';
import { AccountService } from 'src/services';

function ApplicationsAccounts() {
  const [accounts, setAccounts] = useState();
  const handleFetchData = useCallback(async () => {
    const { isSuccess, data } = await axiosHandler(() =>
      AccountService.getAccountList()
    );
    if (isSuccess) {
      setAccounts(
        data?.users?.map((account): any => ({
          ...account,
          id: account?._id,
          orderDetails: 'Fiat Deposit',
          orderDate: new Date().getTime(),
          orderID: 'VUVX709ET7BY',
          sourceName: 'Bank Account',
          sourceDesc: '*** 1111',
          amountCrypto: 34.4565,
          amount: 56787,
          cryptoCurrency: 'ETH',
          currency: '$'
        }))
      );
    }
  }, []);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);
  return (
    <>
      <Helmet>
        <title>Accounts - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOrders list={accounts} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ApplicationsAccounts;
