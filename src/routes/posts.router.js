// src/routes/posts.router.js

import express from 'express';
import { prisma } from '../utils/prisma/index.js';
import { PostsRepository } from '../repositories/posts.repository.js';
import { PostsService } from '../services/posts.service.js';
import { PostsController } from '../controllers/posts.controller.js';

const router = express.Router();

const postsRepository = new PostsRepository(prisma);
const postsService = new PostsService(postsRepository);
// postsController의 인스턴스를 생성합니다.
const postsController = new PostsController(postsService);

/** 게시글 조회 API **/
router.get('/', postsController.getPosts);

/** 게시글 상세 조회 API **/
router.get('/:postId', postsController.getPostById);

/** 게시글 작성 API **/
router.post('/', postsController.createPost);

/** 게시글 수정 API **/
router.put('/:postId', postsController.updatePost);

/** 게시글 삭제 API **/
router.delete('/:postId', postsController.deletePost);

export default router;