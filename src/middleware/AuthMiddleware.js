export default function AuthMiddleware ({ next, store }){
  console.log('AuthMiddleware')

  return next()
}
