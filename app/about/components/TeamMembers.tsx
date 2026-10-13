import React from 'react'
import { teamMembers, type TeamMember } from '@/data/about'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <ImagePlaceholder
        src={member.imageUrl}
        alt={member.name}
        className="aspect-[4/5] w-full"
        showLabel={false}
      />
      <div className="flex flex-col gap-1 p-4 text-center sm:p-5">
        <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{member.name}</h3>
        <p className="text-sm font-medium text-blue-600">{member.role}</p>
        {member.bio ? (
          <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm">{member.bio}</p>
        ) : null}
      </div>
    </article>
  )
}

/**
 * Renders team from `data/about.ts` → `teamMembers`.
 * Later: pass members from a Strapi fetch instead of the static import.
 */
type TeamMembersProps = {
  members?: TeamMember[]
}

const TeamMembers = ({ members = teamMembers }: TeamMembersProps) => {
  if (!members.length) return null

  return (
    <section className="w-full bg-white px-4 pb-16 sm:px-8 sm:pb-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet the Team</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 sm:text-base">
            The people behind WMsols - engineers, designers, and strategists building technology that matters.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
