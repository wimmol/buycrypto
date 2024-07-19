import './index.css';
import lottieJson from '@assets/lottie/buycrypto.json';

import { useEffect, useState } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import WebApp from '@twa-dev/sdk';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import store from '@storeConfig/store.ts';
import { chakraTheme } from './theme/chackraTheme.ts';
import RootRouter from '@navigation/RootRouter.tsx';
import Lottie from 'react-lottie-player';

function App() {
  const [isUpToDate, setIsUpToDate] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  useEffect(() => {
    WebApp.expand();
    setIsPlay(true);
    setTimeout(() => {
      setIsUpToDate(true);
    }, 6000);
  }, []);
  if (!isUpToDate) {
    return (
      <Box
        h="100vh"
        w="100%"
        position="absolute"
        top={0}
        left={0}
        overflow="hidden"
        bg="primary"
      >
        <Lottie
          animationData={lottieJson}
          loop={false}
          play={isPlay}
          onLoad={() => {
            setTimeout(() => {
              WebApp.setBackgroundColor('#000C66');
            }, 350);
            setTimeout(() => {
              WebApp.setHeaderColor('#000C66');
            }, 1000);
          }}
        />
      </Box>
    );
  }
  return (
    <TonConnectUIProvider manifestUrl="https://duskwerefox.github.io/manifest.json">
      <Provider store={store}>
        <ChakraProvider>
          <ChakraProvider theme={chakraTheme}>
            <RootRouter />
          </ChakraProvider>
        </ChakraProvider>
      </Provider>
    </TonConnectUIProvider>
  );
}

export default App;
