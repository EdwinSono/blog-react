/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBlog } from '../../services/blog';
import { useUser } from '../../services/user';

interface Props {
  comment: any;
  blogSlug: string;
  position: number
}

const Comment = ({ comment, blogSlug, position }: Props) => {
  const { removeComment }: any = useBlog();
  const user = useUser();

  const deleteComment = () => {
    removeComment(blogSlug, position);
  };

  const canRemove = user.isAdmin || user.data?.username === comment.author;

  return (
    <li>
      <p style={{ fontWeight: 'bold' }}>
        {comment.author}
        {canRemove && (
          <span
            style={{ color: 'red', marginLeft: '8px', cursor: 'pointer' }}
            onClick={deleteComment}
          >
            X
          </span>
        )}
      </p>
      <p>{comment.content}</p>
    </li>
  );
};

export { Comment };
