import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments, deleteComment } from '../store/commentsSlice';
import CommentList from '../components/comments/CommentList';
import CommentForm from '../components/comments/CommentForm';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import './PostPage.css';

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector((state) => state.comments);
  
  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  const handleDeleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      dispatch(deleteComment(commentId));
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="post-page">
      <h1 className="page-title">Post #{id}</h1>
      <CommentList 
        comments={comments} 
        onDelete={handleDeleteComment} 
      />
      <CommentForm postId={id} />
    </div>
  );
};

export default PostPage;