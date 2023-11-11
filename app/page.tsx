import { auth } from '@/lib/auth'

export default async function Home() {
  const session = await auth();
  return (
    <>
     <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  )
}
