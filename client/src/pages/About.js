import React from 'react';
import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <div>
      <PageHeader pageTitle='About Higher Learning'/>

      <div className='container main-content text-center'>
        <div className='row mb-4'>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur perspiciatis voluptate accusantium, expedita deleniti, cum magnam adipisci atque aut officia at facere fugit quibusdam nisi odio harum magni molestias qui porro enim illo itaque?</p>
        </div>

        <div className='row mt-5 mb-5'>
          <h3 className='mx-auto mb-4'>Our Team</h3>
          <div className='row'>

            <div className='col-lg-3 px-4'>
              <div className='rounded-circle mb-3' style={{height: 200 +'px', width: 200 +'px', backgroundColor: '#808080'}}></div>
              <h5 className='mb-3 text-center'>Individual Name</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis pariatur ad excepturi sit ratione aspernatur eius nesciunt fuga nisi?</p>
            </div>

            <div className='col-lg-3 px-4'>
              <div className='rounded-circle mb-3' style={{height: 200 +'px', width: 200 +'px', backgroundColor: '#808080'}}></div>
              <h5 className='mb-3 text-center'>Individual Name</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis pariatur ad excepturi sit ratione aspernatur eius nesciunt fuga nisi?</p>
            </div>

            <div className='col-lg-3 px-4'>
              <div className='rounded-circle mb-3' style={{height: 200 +'px', width: 200 +'px', backgroundColor: '#808080'}}></div>
              <h5 className='mb-3 text-center'>Individual Name</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis pariatur ad excepturi sit ratione aspernatur eius nesciunt fuga nisi?</p>
            </div>

            <div className='col-lg-3 px-4 text-center'>
              <div className='rounded-circle mb-3' style={{height: 200 +'px', width: 200 +'px', backgroundColor: '#808080'}}></div>
              <h5 className='mb-3 text-center'>Individual Name</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis pariatur ad excepturi sit ratione aspernatur eius nesciunt fuga nisi?</p>
            </div>

          </div>
        </div>

        <div className='row mt-5'>
          <h4 className='mx-auto'>Want to get in touch?</h4>
          {/* email form */}
          <div className='col-lg-2'></div>
          <div className='col-lg-8 mx-auto'>
            <form>
              <div class='form-group'>
                <label for='formGroupExampleInput'>Example label</label>
                <input type='text' class='form-control' id='formGroupExampleInput' placeholder='Example input placeholder'></input>
              </div>
              <div class='form-group'>
                <label for='formGroupExampleInput2'>Another label</label>
                <input type='text' class='form-control' id='formGroupExampleInput2' placeholder='Another input placeholder'></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}