import { UserProfile } from '@clerk/nextjs'

export default function UserProfilePage() {
  return (
    <div className=' flex justify-center items-center'>
      <UserProfile />
    </div>
  )
}
