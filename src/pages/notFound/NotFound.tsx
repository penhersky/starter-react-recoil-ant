import { FC } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import { MAIN_PATHS } from '@constants/routes';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleOnClickGoHome = () => {
    navigate(MAIN_PATHS.MAIN_PAGE);
  };

  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={handleOnClickGoHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
