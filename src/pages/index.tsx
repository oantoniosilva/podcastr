import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      Index
    </div>
  )
}

export default Home


export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    
    revalidate: 60 * 60 * 8, 
  }
}