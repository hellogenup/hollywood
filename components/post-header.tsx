import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  )
}
