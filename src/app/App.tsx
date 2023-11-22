import { PageProvider } from "./providers/PageProvider"
import StoreProvider from "./providers/StoreProvider"

function App() {
  return (
    <StoreProvider>
      <PageProvider />
    </StoreProvider>
  )
}

export default App
