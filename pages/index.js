import { Link } from "@chakra-ui/layout";


export default function Home() {
  return (
    <>
      <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
        About
      </Link>
    </>
  )
}
