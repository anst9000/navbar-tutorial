import './Hero.css'
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich your<br /><span className="primary-color">online business</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quas in accusamus, est sunt quasi cumque aliquam iste corrupti sequi architecto excepturi tempore fuga sit.</p>

            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <span><FaDatabase /> Staxx</span>
                <span><FaAsterisk /> Star AI</span>
                <span><FaAccusoft /> Accusoft</span>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-text">Sign in with</p>
                <div className="social-login">
                  <span><FaFacebook size={20} /></span>
                  <span><FaTwitter size={20} /></span>
                  <span><FaGithub size={20} /></span>
                </div>

                <div className="divider">
                  <p><span>Or</span></p>
                </div>
                <form action=''>
                  <input type="text" placeholder='Name' />
                  <input type="email" placeholder='Email' />
                  <input type="password" placeholder='Password' />
                  <button>Create Your Account</button>
                </form>
              </div>
              <div className="form-footer">
                <p>
                  By signing up, you agree to our <span className="primary-color"> Terms, Data Policy</span>
                  and <span className="primary-color"> Cookies Policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
