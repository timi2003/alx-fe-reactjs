import { QueryClient, QueryClientProvider } from '@tanstackreact-query';
import './App.css'
import PostsComponent from './PostsComponent';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
  )
}

export default App;
