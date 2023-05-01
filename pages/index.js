import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import Timeline from '@/components/Timeline'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}`}
      />
      <About />
      <CTA />
      <Timeline />
    </>
  )

  function About() {
    return (
      <section>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
            About <span className="text-primary">BG</span>
          </h1>
        </div>
        <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-2 ">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Entrepreneur. Dreamer.</div>
            <div className="text-gray-500 dark:text-gray-400">Mechatronics and Blockchain.</div>
            <SocialIcons />
          </div>

          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Khaled Bahabri (@Khaledbuilds) is an Mechatronics Engineer, Blockchain Enthusiast & Entrepreneur. He has been blogging, building & shipping tech solutions around the globe,
              started from the age of sixteen.
            </p>
            <p>
              He's currently creating Smart Contracts using Solidity, building dApps, and getting deeper in Web3 development.
            </p>
            <p>
              He's currently a full-time Mechatronics Engineer at IKCU. He has over two years of experience in Blockchain and Web3 apps.
            </p>
          </div>
        </div>
      </section>
    )
  }
}
function SocialIcons() {
  return (
    <div className="flex item-center justify-center pt-6 space-x-3">
      <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
      <SocialIcon kind="github" href={siteMetadata.github} />
      <SocialIcon kind="facebook" href={siteMetadata.facebook} />
      <SocialIcon kind="youtube" href={siteMetadata.youtube} />
      <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
      <SocialIcon kind="twitter" href={siteMetadata.twitter} />
    </div>
  )
}
