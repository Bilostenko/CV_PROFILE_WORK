import { useHttp } from "../hooks/http.hook";

const GitHubService = () => {

  const { loading, request, error, clearError } = useHttp();
  const username = 'Bilostenko';

  const getRepoCount = async () => {
    return await request(`https://api.github.com/users/${username}/repos?per_page=200`);
  }
  

  return {
    loading,
    error,
    clearError,
    getRepoCount
  };
}

export default GitHubService;









// const GitHubService = () => {
//   const [repositoriesCount, setRepositoriesCount] = useState(null);

//   useEffect(() => {
//     const username = 'Bilostenko';

//     fetch(`https://api.github.com/users/${username}/repos?per_page=200`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Отримали дані про репозиторії
//         setRepositoriesCount(data);

//         // Обробка отриманих даних
//         const publicRepositoriesCount = data.length;
//         console.log('Кількість публічних репозиторіїв:', publicRepositoriesCount);

//         // Інші дії з отриманими даними
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <p>Кількість репозиторіїв: {repositoriesCount ? repositoriesCount.length : 'Завантаження...'}</p>
//     </div>
//   );
// };
