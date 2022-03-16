import Image from 'next/image'
import githubLogo from '../assets/github-logo.png'
import twitterLogo from '../assets/twitter-logo.png'
import instagramLogo from '../assets/instagram-logo.png'

export default function Footer() {
    return (
      <footer className='p-5'>
        <div className='flex justify-center'>
          <div className='p-4'>
            <a 
              href='https://github.com/robriks/HuskyCoin'>
              <Image 
                src={githubLogo}
              />
            </a>
          </div>
          <div className='p-4'>
            <a
              href='https://twitter.com/marsterlund'>
              <Image 
                src={twitterLogo} 
              />
            </a>
          </div>
          <div className='p-4'>
            <a
              href='https://instagram.com/marsterlund'>
              <Image
                src={instagramLogo} 
              />
            </a>
          </div>
        </div>
      </footer>
    )
}