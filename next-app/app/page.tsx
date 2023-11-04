import Image from 'next/image'
import Link from 'next/link'
import ProductList from './components/productList'

export default function Home() {
  return (
    <>
    <h1>Hello world </h1>
    <Link href="/users">Users</Link>
    <ProductList />
    </>
  )
}
