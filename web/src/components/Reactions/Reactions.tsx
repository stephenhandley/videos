import { ReactionEmoji, ReactionList } from 'src/components/ReactionEmoji'
import { useCurrentUser } from 'src/helpers/hooks'

const Reactions = ({ className = '', video, onClick }) => {
  const currentUser = useCurrentUser()
  const { reactions } = video
  const currentReactionType = reactions.find(
    (reaction) => reaction.user.id === currentUser.id
  )?.type

  return (
    <div className={className}>
      {ReactionList.map((type) => (
        <ReactionEmoji
          className="mr-2"
          key={type}
          type={type}
          onClick={() => {
            onClick(type)
          }}
          selected={type === currentReactionType}
        />
      ))}
    </div>
  )
}

export default Reactions
