"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
class CommentModel {
    constructor(id, user_id, post_id, content, likes, dislikes, created_at, updated_at) {
        this.id = id;
        this.user_id = user_id;
        this.post_id = post_id;
        this.content = content;
        this.likes = likes;
        this.dislikes = dislikes;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
exports.CommentModel = CommentModel;
