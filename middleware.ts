import { NextResponse } from 'next/server'
export default function middleware(req,ev) {
  const { pathname,search } = req.nextUrl
  const referer = req.headers.get('referer')
  var postId = pathname.replace('/posts','');
  if(referer!=undefined){
      if(referer.includes('facebook') || referer.includes('t.co')){
          return NextResponse.redirect(process.env.WORDPRESS_API_URL+postId+search)
      }           
  }
  return NextResponse.next()
}