interface Movies {
  id: number;
  name: String;
  ticket: number;
  description: string;
}
const movies: Movies[] = [];

export default movies;

export function createMvoies(input:Omit<Movies,"id">){
  const newMovies={
    id:movies.length+1,
    name:input.name,
    ticket:input.ticket,
    description:input.description,
}
movies.push(newMovies);
return newMovies
}
export function UpdateMovies(input:Movies){
  const moviesId=input.id
  const moviesIndex=movies.findIndex((m)=>m.id===moviesId)
  movies[moviesIndex]={
    ...movies[moviesIndex],
    name:input.name,
    ticket:input.ticket,
    description:input.description,

}
return UpdateMovies;
  
}
