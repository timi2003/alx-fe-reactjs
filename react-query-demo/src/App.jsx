import { QueryClient, QueryClientProvider } from '@tanstackreact-query';
import './App.css'
import PostsComponents from './PostsComponents';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <PostsComponents />
      </QueryClientProvider>
  )
}

export default App;
