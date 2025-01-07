// src/repositories/posts.repository.js

export class PostsRepository {
  constructor(prisma) {
    // 생성자에서 전달받은 Prisma 클라이언트의 의존성을 주입합니다.
    this.prisma = prisma;
  }

  findAllPosts = async () => {
    // ORM인 Prisma에서 Posts 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
    const posts = await this.prisma.posts.findMany();

    return posts;
  };

  findPostById = async (postId) => {
    // ORM인 Prisma에서 Posts 모델의 findUnique 메서드를 사용해 데이터를 요청합니다.
    const post = await prisma.posts.findUnique({
      where: { postId: +postId },
    });

    return post;
  };

  createPost = async (nickname, password, title, content) => {
    // ORM인 Prisma에서 Posts 모델의 create 메서드를 사용해 데이터를 요청합니다.
    const createdPost = await prisma.posts.create({
      data: {
        nickname,
        password,
        title,
        content,
      },
    });

    return createdPost;
  };

  updatePost = async (postId, password, title, content) => {
    // ORM인 Prisma에서 Posts 모델의 update 메서드를 사용해 데이터를 수정합니다.
    const updatedPost = await prisma.posts.update({
      where: {
        postId: +postId,
        password: password,
      },
      data: {
        title,
        content,
      },
    });

    return updatedPost;
  };

  deletePost = async (postId, password) => {
    // ORM인 Prisma에서 Posts 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
    const deletedPost = await prisma.posts.delete({
      where: {
        postId: +postId,
        password: password,
      },
    });

    return deletedPost;
  };
}