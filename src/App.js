import { Container } from 'react-bootstrap';
import './App.css';
import aimg1 from './assets/images/AboutImage1.png';
import aimg2 from './assets/images/AboutImage2.png';
import roadmapimg1 from './assets/images/RoadmapImage1.png';
import roadmapimg2 from './assets/images/RoadmapImage2.png';
import images from './assets/images/Images.png'
import images1 from './assets/images/Images1.png'
import Header from './component/Header';
import aboutbackgroundimg1 from './assets/images/AboutBackgroundImage1.png'
import aboutbackgroundimg2 from './assets/images/AboutBackgroundImage2.png'
import aboutbackgroundimg3 from './assets/images/AboutBackgroundImage3.png'

function App() {
  return (
    <>

      <Header />
      {/* body */}
      <main>
        {/* section2 */}
        <div className='section2'>
          <img src={aboutbackgroundimg1} className="abi1" alt="" />
          <img src={aboutbackgroundimg2} className="abi2" alt="" />
          <img src={aboutbackgroundimg3} className="abi3" alt="" />
          <img src={aimg1} className="aimg1" alt="" />
          <img src={aimg2} className="aimg2" alt="" />
          <Container>
            <h1 className='commonTitle1 text-center py-5'>ABOUT US</h1>
            <div className='row'>
              <div className='col-7'>
                <p className='commonDesc'>
                  Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution. Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution.
                  <br /><br />
                  Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution. Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution.
                </p>
              </div>
              <div className='col-5'>

              </div>
            </div>
          </Container>
        </div>
        {/* section2 */}

        {/* section3 */}
        <div>
          <h1 className='commonTitle1 text-center py-5'>ROADMAP</h1>
        </div>
        {/* ----------------------------------------------------- */}
        <div className='road-mapImg-div'>
          <img src={roadmapimg1} className="roadmapImg1" alt="" />
          <img src={images} className="images" alt="" />
        </div>
        <Container>
          <div className='row'>
            <div className='col-7'>
              <h1 className='commonTitle2'>10% SOLD</h1>
              <p className='commonDesc'>
                Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution. Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution.
              </p>
            </div>
            <div className='col-5'>

            </div>
          </div>
        </Container>
        {/* ----------- */}
        <div className='road-mapImg-div text-end'>
          <img src={roadmapimg2} className="roadmapImg2" alt="" />
          <img src={images1} className="images1" alt="" />
        </div>
        <Container>
          <div className='row'>

            <div className='col-5'>

            </div>
            <div className='col-7 text-end'>
              <h1 className='commonTitle2'>25% SOLD</h1>
              <p className='commonDesc'>
                Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution. Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution.
              </p>
            </div>
          </div>
        </Container>
        <div className='road-mapImg-div'>
          <img src={roadmapimg1} className="roadmapImg1" alt="" />
          <img src={images} className="images" alt="" />
        </div>
        <Container>
          <div className='row'>
            <div className='col-7'>
              <h1 className='commonTitle2'>50% SOLD</h1>
              <p className='commonDesc'>
                Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution. Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution.
              </p>
            </div>
            <div className='col-5'>

            </div>
          </div>
        </Container>
        {/* ----------- */}
        <div className='road-mapImg-div text-end'>
          <img src={roadmapimg2} className="roadmapImg2" alt="" />
          <img src={images1} className="images1" alt="" />
        </div>
        <Container>
          <div className='row'>

            <div className='col-5'>

            </div>
            <div className='col-7 text-end'>
              <h1 className='commonTitle2'>75% SOLD</h1>
              <p className='commonDesc'>
                Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution. Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution.
              </p>
            </div>
          </div>
        </Container>
        <div className='road-mapImg-div'>
          <img src={roadmapimg1} className="roadmapImg1" alt="" />
          <img src={images} className="images" alt="" />
        </div>
        <Container>
          <div className='row'>
            <div className='col-7'>
              <h1 className='commonTitle2'>100% SOLD</h1>
              <p className='commonDesc'>
                Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution. Once  we  establish  a  community  of  AVA Avocado  enthusiasts,  we’ll  be  airdropping  500  Avocados  as  a  show  of  appreciation.  This  will  also  support  our  marketing  efforts,  by  offering  a means  of  media  distribution.
              </p>
            </div>
            <div className='col-5'>

            </div>
          </div>
          <div className='p-5'></div>
        </Container>
        {/* section3 */}
      </main>
      {/* body */}
    </>
  );
}

export default App;
