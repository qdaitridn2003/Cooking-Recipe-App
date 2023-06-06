import { NativeBaseProvider } from 'native-base';
import RootApp from './src/RootApp';

export default function App() {

  return (
    <NativeBaseProvider>
      <RootApp/>
    </NativeBaseProvider>
  );
}

