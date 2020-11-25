import React, { useState } from 'react';
import Header from '../../components/Header/index';
import { Container, PostList } from './style';
import dracula from '~/assets/Dracula.jpg';
import megera from '~/assets/aMegeraDomada.jpg';
import frank from '~/assets/Frank.jpg';
import oHomem from '~/assets/oHomem.jpg';

function Dashboard() {
  const [posts, setPosts] = useState([
    { titulo: 'O Dracula', foto: dracula },
    { titulo: 'O Homem Mais Rico da Babilonia', foto: oHomem },
    { titulo: 'A Megera Domada', foto: megera },
    { titulo: 'Frakeinstein', foto: frank },
  ]);
  return (
    <Container>
      <PostList>
        {posts.map(post => (
          <li>
            <label>{post.titulo}</label>
            <img src={post.foto} alt={post.foto.toString} />
          </li>
        ))}
      </PostList>
    </Container>
  );
}
export default Dashboard;
