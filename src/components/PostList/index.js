import React, { Component } from 'react';

import './style.css'
import PostItem from '../PostItem';
import profile1 from '../../assets/imgs/profile1.jpg';
import profile2 from '../../assets/imgs/profile2.png';
import profile3 from '../../assets/imgs/profile3.jpg';
import profile4 from '../../assets/imgs/profile4.jpeg';
import profile5 from '../../assets/imgs/profile5.jpg';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Sérgio Mallandro",
          avatar: profile1
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: profile2
            },
            content: "A Rocketseat está sempre em busca de novos membro para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: profile3
        },
        date: "04 Jun 2019",
        content: `Fala galera, beleza? 
                    Estou fazendo o bootcamp GoStack da Rocketseat e está sendo 
                    muito massa! Alguém mais aí aí fazendo, comenta na publicação 
                    para trocarmos uma ideia.`,
        comments: [
          {
            id: 3,
            author: {
              name: "Clara Lisboa",
              avatar: profile4
            },
            content: `Também estou fazendo o Bootcamp e estou adorando! Estou no
                        terceiro módulo sobre Node e já tenho minha API de desafios
                        construída.`
          },
          {
            id: 4,
            author: {
              name: "César Toledo",
              avatar: profile5
            },
            content: `Que maaaaassa! Estou pensando em me inscrever na próxima turma
                        pra ver qual é desse Bootcamp GoStack. Dizem que os devs saem
                        de lá com super poderes.`
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => <PostItem key={post.id} post={post} />)}
      </div>
    )
  }
}

export default PostList;