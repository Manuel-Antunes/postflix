import React, { useState } from 'react';
import Header from '../../components/Header/index';
import { Container, Post } from './style';
import dracula from '~/assets/Dracula.jpg';
import megera from '~/assets/aMegeraDomada.jpg';
import frank from '~/assets/Frank.jpg';
import oHomem from '~/assets/oHomem.jpg';
import { Link } from 'react-router-dom';
import Carrousel from 'react-elastic-carousel';

function Dashboard() {
  const [posts, setPosts] = useState([
    { titulo: 'O Dracula', foto: dracula, id: 1 },
    { titulo: 'O Homem Mais Rico', foto: oHomem, id: 2 },
    { titulo: 'A Megera Domada', foto: megera, id: 3 },
    { titulo: 'Frakeinstein', foto: frank, id: 4 },
  ]);
  return (
    <Container>
      <Carrousel
        focusOnSelect={true}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        enableMouseSwipe={false}
        itemsToShow={3}
      >
        {posts.map(post => (
          <Link to={'/post/' + post.id}>
            <Post>
              <label>{post.titulo}</label>
              <img src={post.foto} alt={post.foto.toString} />
            </Post>
          </Link>
        ))}
      </Carrousel>
    </Container>
  );
}
export default Dashboard;
